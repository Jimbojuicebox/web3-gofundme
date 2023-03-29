import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'All Campaigns',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Create Campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'Payment',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'Withdraw',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'Your Campaigns',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];