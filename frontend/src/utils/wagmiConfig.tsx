import { wagmiConnectors } from "./wagmiConnectors";
import { Chain, createClient, http } from "viem";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { createConfig } from "wagmi";
import { assetchain_testnet } from "./assetchainTestnetChain";

// We always want to have mainnet enabled (ENS resolution, ETH price, etc). But only once.
export const enabledChains = assetchain_testnet;

export const wagmiConfig = getDefaultConfig({
  chains: [assetchain_testnet],
  appName: "assetchain",
  projectId: "0db807d370dad6268e4d985c71868ed3", // Replace with your own Id
  // ssr: false,
});
