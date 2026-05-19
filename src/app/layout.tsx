import type { Metadata, Viewport } from 'next';
import { inter, lora, jetbrainsMono } from '@/lib/fonts';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/Toaster';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';

// ============================================
// Metadata
// ============================================

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAF9',
};

export const metadata: Metadata = {
  title: {
    default: 'My Site',
    template: '%s | My Site',
  },
  description: 'My awesome website',
};

// ============================================
// Root Layout
// ============================================

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#FAFAF9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0C0A09" media="(prefers-color-scheme: dark)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var root = document.documentElement;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    root.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
