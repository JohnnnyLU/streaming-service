import type { Plan } from './plan.types.ts';

export const plans: Plan[] = [
  {
    id: 'basic',
    title: 'Basic Plan',
    description:
      'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    trialLabel: 'Start Free Trial',
    actionLabel: 'Choose Plan',
  },
  {
    id: 'standard',
    title: 'Standard Plan',
    description:
      'Access to a wider selection of movies and shows, including most new releases and exclusive content.',
    monthlyPrice: 12.99,
    yearlyPrice: 129.99,
    trialLabel: 'Start Free Trial',
    actionLabel: 'Choose Plan',
  },
  {
    id: 'premium',
    title: 'Premium Plan',
    description:
      'Access to a widest selection of movies and shows, including all new releases and Offline Viewing.',
    monthlyPrice: 14.99,
    yearlyPrice: 149.99,
    trialLabel: 'Start Free Trial',
    actionLabel: 'Choose Plan',
  },
];
