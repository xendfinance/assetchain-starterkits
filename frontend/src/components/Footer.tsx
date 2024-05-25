import React from "react";
import Link from "next/link";
import {
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <div className="py-8 px-1  lg:mb-0 bg-[#1d292c]">
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <Link
              href="https://gotbit-faucet-backend-qa.test.gotbit.app/"
              passHref
              className="btn btn-primary btn-sm font-normal gap-1 text-white"
            >
              <span>Faucets</span>
            </Link>

            <Link
              href="https://testnet.xendrwachain.com/"
              passHref
              className="btn btn-primary btn-sm font-normal gap-1 flex text-white"
            >
              {/* <MagnifyingGlassIcon className="h-4 w-4" /> */}
              <span>Block Explorer</span>
            </Link>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center text-white">
                Built with <HeartIcon className="inline-block h-4 w-4" /> at
              </p>
              <a
                className="flex justify-center items-center gap-1"
                href="https://buidlguidl.com/"
                target="_blank"
                rel="noreferrer"
              >
                🔗
                <span className="link text-white">AssetChain</span>
              </a>
            </div>
            <span>·</span>
            {/* <div className="text-center">
              <a
                href="https://t.me/Oxkodesage"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Support
              </a>
            </div> */}
          </div>
        </ul>
      </div>
    </div>
  );
};
