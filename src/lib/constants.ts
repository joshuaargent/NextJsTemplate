// ============================================
// Site Configuration
// ============================================

export const siteConfig = {
  name: 'My Site',
  description: 'My awesome website',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  author: {
    name: 'Your Name',
    bio: 'About me',
  },
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
