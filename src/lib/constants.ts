// ============================================
// Site Configuration
// ============================================

export const siteConfig = {
  name: 'My Template',
  description: 'A reusable Next.js template for any website project.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  ogImage: '/og-image.png',
  links: {
    youtube: 'https://youtube.com/@joshua_argent',
    github: 'https://github.com/joshuaargent',
    instagram: 'https://instagram.com/joshua_argent',
    facebook: 'https://facebook.com/joshua_argent',
    strava: 'https://www.strava.com/athletes/500534339',
    email: 'mailto:argentjackjoshua@outlook.com',
  },
  author: {
    name: 'Your Name',
    bio: 'Your bio here',
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
