"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };

  return (
      <div className="flex flex-row justify-between bg-brand-red text-white p-4">

        <div className="flex-row flex items-center justify-between ">
          <h1 className="text-4xl font-bold">Editor</h1>
          <Image src="/logo.png" alt="Editor AI Logo" width={50} height={50} className="object-cover" />
          <h1 className="text-4xl font-bold">I</h1>
        </div>
        <div className="flex flex-row">

          <div className={isMenuOpen ? "" : "hidden"}>
            <ul>
              <li>
                <Link href={"/pages/homepage"}>Go to Homepage</Link>
              </li>
              <li>
                <Link href={"/pages/texteditor"}>Go to Text Editor</Link>
              </li>
              <li>
                <Link href={"/pages/login"}>Go to Login</Link>
              </li>
            </ul>
          </div>
          <button onClick={toggleMenu} className="menu-toggle">
            ☰
          </button>
        </div>
    </div>
  );
};


export default Header;
