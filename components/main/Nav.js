import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b-2 border-black sticky top-0 z-20  bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/">
          <a className="cursor-pointer">
            <span className="font-bold text-3xl">Sircles</span>
          </a>
        </Link>
        <div className="flex  gap-x-5 w-1/4 uppercase">
          <a className="text-md font-bold cursor-pointer whitespace-nowrap">
            Home
          </a>
          <a className="text-md font-bold cursor-pointer whitespace-nowrap">
            About US
          </a>
          <a className="text-md font-bold cursor-pointer whitespace-nowrap">
            Contact US
          </a>
          <a className="text-md font-bold cursor-pointer whitespace-nowrap">
            Sircles SWAG
          </a>
          <a className="text-md font-bold cursor-pointer whitespace-nowrap">
            Sircles SWAG
          </a>
        </div>
      </div>
    </header>
  );
}
