"use client"

import { FormEvent } from 'react'
import Image from 'next/image';
import React from "react";
import { useRouter } from 'next/navigation'
import { Poppins } from 'next/font/google'
import { useAuth } from '@/context/AuthContext';

//const poppins = Poppins({ weight: '400', subsets: ['latin']})
const LoginPage = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loginError, setLoginError] = React.useState('')
  const router = useRouter()

  const { user, signUp, signIn, signOut } = useAuth();


  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    await signIn(email, password);


    return router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="bg-brand-tan p-8 rounded-lg shadow-md flex flex-col items-center" style={{ width: '532px', 
       height: '640px',borderRadius: '9px 0px 0px 0px'}}>
        <div className="flex justify-center w-full">
        <Image src="/Ellipse 2.png" alt="Logo" width={90} height={90} 
        //style={{top: '135px', left: '595px', position: 'absolute'}} 
        />
        </div>


        <h1 className="text-2xl text-center mb-6 font-newsreader font-bold"  style={{
          //position: 'absolute', 
          top: '283px', left: '540px', width: '210px', fontSize: '48px', lineHeight: '48px', color: '#31302F', fontWeight: '700', border: '0.69x solid #31302F'}}>
          Editor AI</h1>
        {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
        <form onSubmit={handleForm} className="w-full flex flex-col items-center">
          <div className="mb-4">
          <div style={{ height: '0.69px', background: 'rgba(49, 48, 47, 1)', width: '100%', position: 'relative', top: '50px'}}></div>
            <input
              className="w-full border p-2" style={{ 
                width: '341px', 
                height: '42px',
                top: '347px',
                left: '475px',
                borderRadius: '10px',
                fontFamily: 'Poppins',               
                fontSize: '20px',
                lineHeight: '30px',
                //position: 'absolute'
                }}
              type="email"
              value={email}
              placeholder="Email"
              // className='font-poppins pl-3 placeholder-color custom-border-opacity'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <div style={{ height: '0.69px', background: 'rgba(49, 48, 47, 1)', width: '100%', position: 'relative', top: '50px' }}></div>
            <input
              className="w-full border p-2" style={{ 
                width: '341px', 
                height: '42px',
                top: '413px',
                left: '475px',
                borderRadius: '10px',
                fontFamily: 'Poppins',              
                fontSize: '20px',
                lineHeight: '30px',
                color: 'login-text'
                //position: 'absolute', 
                
                }}
              type="password"
              placeholder='Password'
              // className='pl-3 font-poppins placeholder-color custom-border-opacity' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div> 
          <button
             className="bg-main-color text-white px-4 py-2 hover:bg-blue-600 items-center"   style={{
              width: '252px',
              height: '54px',
              fontFamily: 'poppins', // Corrected from 'font'
              fontSize: '22px',
              //lineHeight: '33px',
              background: 'radial-gradient(50% 50% at 50% 50%, #9F4949 0%, #801212 100%)',
              borderRadius: '12px'}}
            type="submit"
          >
            log in
          </button>
        </form>
        <h1  className="text-center mt-4 normal-font" style={{fontFamily:'poppins', fontWeight: 'light'}}>
         Dont have an account? 
         </h1>
         <a href="/signup" className="text-main-color bold-weight underline" style={{fontWeight: 'bold'}}>Sign up</a>
      </div>
    </div>
  );
};

export default LoginPage;


