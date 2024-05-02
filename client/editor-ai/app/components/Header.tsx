"use client"

import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation'
import Navigation from './NavigationMenu';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // @ts-ignore
  const { user } = useAuth();
  const userName = user?.displayName
  const auth = getAuth();
  const router = useRouter();


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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />

      <nav className='bg-white font-lg fixed w-full z-20 top-0 start-0 border-b py-1 font-newsreader scroll-py-0' style={{height: '120px'}}>
      <div className="mt-4 max-w-screen-xl flex flex-wrap items-center justify-end mx-auto px-4" style={{ color: '#801212'}}>
        <h1> <img src="/header.svg"alt="Editor AI Logo"/> </h1>


            {/* user is logged in  */}
           
              {/* allowed pages */}                 
           
              {user && (
            <>
              <Navigation />
              <div className="flex md:justify-end">
              <button onClick={handleSignOut} className="text-red bg-brand-tan px-2 py-2 rounded-full hover:bg-red-800 hover:text-white">
                Log Out
              </button>
              </div>
            </>
            )}
            <ul> 
                <li style={{ display: 'inline', marginRight: '40px' }}>
                </li>
              </ul>
            {/* user is not logged in */}
            {!user && (
              <ul>
                <li>
                  <Link href={"/pages/login"} className='font-bold p-2'>Login</Link>
                  <Link href={"/pages/signup"}className='font-bold p-2 '>Signup</Link>
                </li>
              </ul>
            )}
          </div>
    </nav>
    </>
    
  );
};


export default Header;