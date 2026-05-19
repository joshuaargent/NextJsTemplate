// ============================================
// Site Configuration
// ============================================

export const siteConfig = {
  name: 'My Template',
  description: 'A reusable Next.js template for any website project.',
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
  title: 'My Template',
  description: 'A reusable Next.js template for any website project.',
  keywords: ['template', 'nextjs', 'website', 'portfolio'] as string[],
  siteName: 'My Template',
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
  content: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  social: [
    { label: 'YouTube', href: siteConfig.links.youtube },
    { label: 'GitHub', href: siteConfig.links.github },
    { label: 'Twitter', href: siteConfig.links.twitter },
    { label: 'Instagram', href: siteConfig.links.instagram },
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
