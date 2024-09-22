# Asset Chain Starterkit

This is an open-source toolkit for building decentralized applications on Asset Chain. It's designed for developers to create, deploy smart contracts and build user interfaces that interact with those contracts with ease.<br/>
Built using NextJS, Hardhat, Viem, and Typescript.

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Asset Chain Starterkit , follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/xendfinance/assetchain-starterkits.git
cd assetchain_starterkits
cd frontend 
npm install
```

2. Open a terminal, deploy the test contract:

```
cd hardhat
yarn install
yarn deploy --network assetchain_testnet
```

This command deploys a test smart contract to the local network. The contract is located in `/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

3. On a second terminal, start your frontend app:

```
cd frontend
npm run dev
```

Visit your app on: `http://localhost:3000`.

**What's next**:

- Edit your smart contract `YourContract.sol` in `/hardhat/contracts`
- Edit your frontend homepage at `frontend/src/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `/hardhat/deploy`
- Edit your smart contract test in: `/hardhat/test`. To run test use `yarn hardhat:test`


## Contributing

See [CONTRIBUTING.md](https://github.com/xendfinance/nodesale/CONTRIBUTING.md) for contribution and pull request protocol. We expect contributors to follow our guide when submitting code or comments.

## License

[![License: GPL v3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, just say Hi on [Telegram](https://t.me/xendfinancedevs).<br/>
We're always glad to help.
