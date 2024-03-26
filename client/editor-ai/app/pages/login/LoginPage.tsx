"use client"

import { FormEvent } from 'react'
import Image from 'next/image';
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin']})
const LoginPage = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loginError, setLoginError] = React.useState('')
  const router = useRouter()

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      setLoginError('Login failed. Please check your credentials.');
      return;
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="bg-brand-tan p-8 rounded shadow-md flex flex-col items-center">
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
              className='font-poppins pl-3 placeholder-color custom-border-opacity'
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
              className='pl-3 font-poppins placeholder-color custom-border-opacity' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div> 
          <button
            className="bg-brand-red text-white px-4 py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            log in
          </button>
        </form>
        <h1  
        className="text-center mt-4" style={{fontFamily:'poppins'}}
      >
         Don't have an account? <a href="/signup" className="text-main-color font-bold underline">Sign up</a></h1>
      </div>
    </div>
  );
};

export default LoginPage;


