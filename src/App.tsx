import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export default function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "4fd4af2d-4caf-49f0-82d8-2b9f7fd35f20",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  );
}
