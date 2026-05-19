import { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { siteConfig } from '@/lib/constants';
import { Mail, Youtube, Github, Instagram, Facebook, Twitter, Send, MapPin } from 'lucide-react';

// ============================================
// Metadata
// ============================================

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch.',
};

// ============================================
// Contact Page
// ============================================

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Get in Touch" description="Have a question or want to work together? Send me a message." />

      <section className="py-8 md:py-12">
        <div className="container">
          <Card className="mx-auto max-w-xl p-6 md:p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="What is this about?" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 border-t pt-6">
              <div className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href={siteConfig.links.email} className="hover:text-foreground">
                    {siteConfig.links.email.replace('mailto:', '')}
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  {siteConfig.links.youtube && (
                    <a
                      href={siteConfig.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-bg-secondary px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Youtube className="h-4 w-4" />
                      YouTube
                    </a>
                  )}
                  {siteConfig.links.github && (
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-bg-secondary px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {siteConfig.links.twitter && (
                    <a
                      href={siteConfig.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-bg-secondary px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </a>
                  )}
                  {siteConfig.links.instagram && (
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-bg-secondary px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </a>
                  )}
                  {siteConfig.links.facebook && (
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-bg-secondary px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </a>
                  )}
                  {siteConfig.links.strava && (
                    <a
                      href={siteConfig.links.strava}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-bg-secondary px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <MapPin className="h-4 w-4" />
                      Strava
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}