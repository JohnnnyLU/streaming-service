import { routes } from '../../../shared/constants/routes';

type HeaderNavItem = {
  label: string;
  to: string;
  end?: boolean;
};

export const headerNavItems: HeaderNavItem[] = [
  { label: 'Home', to: routes.home, end: true },
  { label: 'Movies & Shows', to: routes.moviesShows, end: true },
  { label: 'Support', to: routes.support, end: true },
  { label: 'Subscriptions', to: routes.subscriptions, end: true },
];
