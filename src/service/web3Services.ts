import { ethers } from "ethers";
import { http, createConfig, cookieStorage, createStorage } from "wagmi";
import { bsc } from "wagmi/chains";
import { metaMask, walletConnect } from "wagmi/connectors";


export function getWagmiConfig() {
    return createConfig({
      chains: [bsc],
      ssr: true,
      storage: createStorage({
        storage: cookieStorage,
      }),
      // To prevent automatic discovery of installed wallets in browser
      multiInjectedProviderDiscovery: true,
      connectors: [
        metaMask({
          headless: true,
        }),
        walletConnect({
          projectId: "",
        }),
      ],
      transports: {
        [bsc.id]: http(),
      },
    });
  }