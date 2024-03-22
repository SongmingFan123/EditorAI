"use client"

import Head from 'next/head'
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
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400&display=swap" rel="stylesheet"/>
      </Head>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" />
      </Head>

        <div className="flex flex-row justify-between bg-brand-white p-4 font-newsreader" style={{ color: '#801212' }}>

        <div className="flex items-end">
          <h1 className="text-4xl large-font font-bold">Editor</h1>
          <Image src="/logo.png" alt="Editor AI Logo" width={50} height={50} className="object-cover" />
          <h1 className="text-4xl large-font font-bold">I</h1>
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
    </>
  );
};

export default Header;
