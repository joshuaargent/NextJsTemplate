// ============================================
// Site Configuration
// ============================================

export const siteConfig = {
  name: 'My Site',
  description: 'My awesome website',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  ogImage: '/og-image.png',
  links: {
    youtube: 'https://youtube.com/@channel',
    github: 'https://github.com/username',
    twitter: 'https://twitter.com/username',
    instagram: 'https://instagram.com/username',
    facebook: 'https://facebook.com/username',
    strava: 'https://www.strava.com/athletes/username',
    email: 'mailto:email@example.com',
  },
  author: {
    name: 'Your Name',
    bio: 'About me',
  },
};

// ============================================
// Metadata
// ============================================

export const meta = {
  title: 'My Site',
  description: 'My awesome website',
  keywords: ['site', 'portfolio', 'personal'] as string[],
  siteName: 'My Site',
  twitter: '@yourhandle',
  instagramHandle: '@yourhandle',
};

// ============================================
// Navigation
// ============================================

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

// ============================================
// Design Tokens
// ============================================

export const colors = {
  primary: '#0D9488',
  primaryHover: '#0F766E',
} as const;

// ============================================
// Animation
// ============================================

export const transitions = {
  fast: '150ms ease',
  base: '200ms ease',
} as const;
