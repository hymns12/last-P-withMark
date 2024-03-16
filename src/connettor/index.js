import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
export const SEPOLIA_CAIN = 11155111

// 2. Set chains
const sepolia = {
  chainId: SEPOLIA_CAIN,
  name: 'Seploia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.infura.io/v3/',
  rpcUrl: import.meta.env.VITE_rpc_url
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

export const configureWeb3Modal = () => {
  createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [sepolia],
  projectId: import.meta.env.VITE_projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})
}