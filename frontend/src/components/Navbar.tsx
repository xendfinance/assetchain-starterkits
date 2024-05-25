"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Navbar = () => {
  return (
    <div className="bg-[#1d292c] min-h-9 flex justify-between z-20 shadow-md shadow-secondary px-0 py-8 sm:px-2">
      <div className="w-auto ">
        <Link
          href="/"
          passHref
          className="flex items-center gap-2 ml-4 mr-6 shrink-0"
        >
          <div className="flex relative w-10 h-10">
            <Image
              alt="Asset chain logo"
              className="cursor-pointer"
              fill
              src="/logos.svg"
            />
          </div>
          <div className="flex flex-col text-white">
            <span className="font-bold leading-tight ">
              Asset Chain Starterkits
            </span>
            <span className="text-xs">by Xend Finance</span>
          </div>
        </Link>
      </div>
      <ConnectButton />
    </div>
  );
};
