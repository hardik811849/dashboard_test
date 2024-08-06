import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdMapsHomeWork,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import RTL from 'views/admin/rtl';

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import Marketplace from 'views/admin/marketplace';
import Partners from 'views/admin/partners';
import Cookies from 'js-cookie';
import { IoPeople } from 'react-icons/io5';
import { FaWallet } from 'react-icons/fa';
import Wallet from 'views/admin/wallet';

const email = Cookies.get('email');

const routes = [
  {
    name: 'Auction',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  // {
  //   name: 'Marketplace',
  //   layout: '/admin',
  //   path: '/place',
  //   icon: (
  //     <Icon as={MdMapsHomeWork} width="20px" height="20px" color="inherit" />
  //   ),
  //   component: <Marketplace />,
  // },
  {
    name: 'Wallet',
    layout: '/admin',
    path: '/wallet',
    icon: <Icon as={FaWallet} width="20px" height="20px" color="inherit" />,
    component: <Wallet />,
  },
  {
    name: 'Partners',
    layout: '/admin',
    path: '/partner',
    icon: <Icon as={IoPeople} width="20px" height="20px" color="inherit" />,
    component: <Partners />,
  },

  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: email ? null : 'Sign In',
    layout: email ? null : '/auth',
    path: email ? null : '/sign-in',
    icon: email ? null : (
      <Icon as={MdLock} width="20px" height="20px" color="inherit" />
    ),
    component: email ? null : <SignInCentered />,
  },
];

export default routes;
