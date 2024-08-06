import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {} from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import {
  ChakraProvider,
  // extendTheme
} from '@chakra-ui/react';
import initialTheme from './theme/theme'; //  { themeGreen }
import { useState } from 'react';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, goerli, sepolia, bscTestnet } from 'wagmi/chains';
// Chakra imports

export default function Main() {
  const projectId = 'bc73d7505fd406159d095af056d4f4d4';

  const data = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  };

  const chains = [goerli, mainnet, arbitrum, sepolia, bscTestnet];

  const wagmiConfig = defaultWagmiConfig({ chains, projectId, data });
  createWeb3Modal({ wagmiConfig, projectId, chains });
  // eslint-disable-next-line
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  return (
    <WagmiConfig config={wagmiConfig}>
      <ChakraProvider theme={currentTheme}>
        <Routes>
          <Route path="auth/*" element={<AuthLayout />} />
          <Route
            path="admin/*"
            element={
              <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
            }
          />
          <Route path="/" element={<Navigate to="/admin" replace />} />
          {/* <Route path="market/*" element={<Marketplace />} /> */}
        </Routes>
      </ChakraProvider>
    </WagmiConfig>
  );
}
