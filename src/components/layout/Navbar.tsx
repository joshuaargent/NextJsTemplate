'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { mainNav, siteConfig } from '@/lib/constants';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/components/providers/ThemeProvider';

// ============================================
// Navbar Component
// ============================================

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/95 backdrop-blur-md transition-all duration-200',
          !isScrolled && 'border-transparent bg-transparent'
        )}
      >
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-semibold">
            {siteConfig.name}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-1">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16 md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="h-16" />
    </>
  );
}
