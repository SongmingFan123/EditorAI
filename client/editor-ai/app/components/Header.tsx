"use client"

import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // @ts-ignore
  const { user } = useAuth();
  const userName = user?.displayName
  const auth = getAuth();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
      await signOut(auth).then(() => {
        // Sign-out successful.
        router.push("/pages/login");
        setIsMenuOpen(false);
      }).catch((error) => {
        // An error happened
        console.log(error);
      });

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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex flex-row justify-between bg-brand-white p-4 font-newsreader" style={{ color: '#801212' }}>
    
      <div className="flex items-end ">
        <h1 className="text-4xl large-font font-bold">Editor</h1>
        <Image src="/logo.png" alt="Editor AI Logo" width={40} height={40} className="object-none"/>
        <h1 className="text-4xl large-font font-bold">I</h1>
      </div>



      <div className="flex flex-row">
        <div className={isMenuOpen ? "" : "hidden flex flex-row space-between"}>
          <div >

            {/* user is logged in  */}
            {user && (
            <div className="flex items-center">
              {/* welcome + name */}
              <div className="flex flex-column">
                <span className="mr-2">Welcome, {user.email}</span>
                <button onClick={handleSignOut} className="text-white bg-red-500 px-2 py-2 rounded-md">Sign Out</button>
              </div>
              {/* allowed pages */}
              <ul>
                <li>
                  <Link href={"/pages/homepage"}>Go to Homepage</Link>
                </li>
                <li>
                  <Link href={"/pages/texteditor"}>Go to Text Editor</Link>
                </li>
              </ul>
            </div>
            )}

            {/* user is not logged in */}
            {!user && (
              <ul>
                <li>
                  <Link href={"/pages/login"}>Go to Login</Link>
                </li>
                <li>
                  <Link href={"/pages/signup"}>Go to Signup</Link>
                </li>
              </ul>
            )}
          </div>

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
