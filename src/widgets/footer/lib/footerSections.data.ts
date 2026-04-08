type FooterNavLink = {
  label: string;
  targetId: string;
};

type FooterSection = {
  title: string;
  links: FooterNavLink[];
};

export const footerSections: FooterSection[] = [
  {
    title: 'Home',
    links: [
      { label: 'Categories', targetId: 'categories' },
      { label: 'Devices', targetId: 'devices' },
      { label: 'Pricing', targetId: 'pricing' },
      { label: 'FAQ', targetId: 'faq' },
    ],
  },
  {
    title: 'Movies',
    links: [
      { label: 'Genres', targetId: 'movies-genres' },
      { label: 'Trending', targetId: 'movies-trending' },
      { label: 'New Release', targetId: 'movies-new' },
      { label: 'Popular', targetId: 'movies-popular' },
    ],
  },
  {
    title: 'Shows',
    links: [
      { label: 'Genres', targetId: 'shows-genres' },
      { label: 'Trending', targetId: 'shows-trending' },
      { label: 'New Release', targetId: 'shows-new' },
      { label: 'Popular', targetId: 'shows-popular' },
    ],
  },
  {
    title: 'Support',
    links: [{ label: 'Contact Us', targetId: 'contact-us' }],
  },
  {
    title: 'Subscription',
    links: [
      { label: 'Plans', targetId: 'plans' },
      { label: 'Features', targetId: 'features' },
    ],
  },
];

export const footerCopyright = '©2023 streamvib, All Rights Reserved';

export const footerBottomLinks = [
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookies' },
];
