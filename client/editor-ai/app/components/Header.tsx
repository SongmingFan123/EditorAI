"use client"

import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation'
import Navigation from './NavigationMenu';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
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

      <nav className="bg-white font-lg p-4">
      <div className="flex flex-row justify-between bg-brand-white max-w-screen-xl flex-wrap" style={{ color: '#801212' }}>
    
      <div className="flex items-end ml-2">
        <h1> <img src="/header.svg" alt="Editor AI Logo"/> </h1>
      </div>



      <div className="flex flex-row">
        <div className= 'grow flex'>
          <div >

            {/* user is logged in  */}
            {user && (
            <div className="flex justify-end items-center" >
              {/* welcome + name */}
              <div className="flex items-center justify-center gap-2 md:gap-8">
                <span className="mr-2 mt-1">Welcome, {user.email}</span>
                <button onClick={handleSignOut} className="text-white bg-brand-red px-2 py-2 rounded-md hover:bg-red-800">Sign Out</button>
              </div>
              {/* allowed pages */}
              <ul> 
                <li style={{ display: 'inline', marginRight: '40px' }}>
                  <Navigation></Navigation>
                </li>
              </ul>
            </div>
            )}

            {/* user is not logged in */}
            {!user && (
              <ul>
                <li>
                  <Link href={"/pages/login"} className='font-bold'>Login</Link>
                </li>
                <li>
                  <Link href={"/pages/signup"}className='font-bold'>Signup</Link>
                </li>
              </ul>
            )}
          </div>

        </div>
        <div className="flex items-end">
      </div>
      </div>
    </div>
    </nav>
    </>
    
  );
};


export default Header;
