import { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Divider } from '@/components/ui/Divider';
import { siteConfig } from '@/lib/constants';
import { Github, Youtube, Instagram, Facebook, Twitter, MapPin, Mail } from 'lucide-react';

// ============================================
// Metadata
// ============================================

export const metadata: Metadata = {
  title: 'About',
  description: 'About me.',
};

// ============================================
// About Page
// ============================================

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        description={siteConfig.author.bio}
      />

      <section className="py-8 md:py-12">
        <Container>
          <Card className="mx-auto max-w-2xl p-6 md:p-8">
            {/* Avatar */}
            <div className="flex justify-center">
              <Avatar alt={siteConfig.author.name} className="h-32 w-32 md:h-40 md:w-40">
                {/* Default avatar - can be replaced with actual image */}
                <span className="text-3xl md:text-5xl">{siteConfig.author.name.charAt(0)}</span>
              </Avatar>
            </div>

            {/* Name & Bio */}
            <div className="mt-6 text-center">
              <h1 className="text-2xl font-bold">{siteConfig.author.name}</h1>
              <p className="mt-2 text-muted-foreground">{siteConfig.author.bio}</p>
            </div>

            <Divider className="my-6" />

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
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

            <Divider className="my-6" />

            {/* Contact */}
            <div className="flex justify-center">
              <a
                href={siteConfig.links.email}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.links.email.replace('mailto:', '')}
              </a>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}