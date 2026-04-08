import type { ComponentType, SVGProps } from 'react';
import FacebookIcon from '../../../shared/assets/icons/facebook-icon.svg?react';
import TwitterIcon from '../../../shared/assets/icons/twitter-icon.svg?react';
import LinkedinIcon from '../../../shared/assets/icons/linkedin-icon.svg?react';

export type SocialLink = {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type FooterSocialSection = {
  title: string;
  items: SocialLink[];
};

export const footerSocialSection: FooterSocialSection = {
  title: 'Connect With Us',
  items: [
    { name: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
    { name: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
  ],
};
