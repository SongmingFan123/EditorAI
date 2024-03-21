// pages/LoginPage.js
"use client"

import { useState } from 'react';
import Image from 'next/image';
import { UserAuth } from '../../context/AuthContext'; // Replace '../path/to/AuthContext' with the actual path to AuthContext

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { emailSignIn } = UserAuth(); // Add this line to get the emailSignIn function from the AuthContext

  const handleLogin = async () => {
    // Implement your authentication logic here
    console.log('Logging in with:', email, password);
    try {
      const user = await emailSignIn(email, password);
      alert('Logged in ');
    }
    catch (error) {
      alert('Error logging in:'+ error);
    }
    // For a real application, you would make a request to a server for authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="bg-brand-tan p-8 rounded shadow-md flex flex-col items-center">
        <div className="flex justify-center w-full">
        <Image src="/logo.png" alt="Logo" width={100} height={100} 
        //style={{top: '135px', left: '595px', position: 'absolute'}} 
        />
        </div>


        <h1 className="text-2xl text-center mb-6 font-newsreader font-bold"  style={{
          //position: 'absolute', 
          top: '283px', left: '540px', width: '210px', fontSize: '48px', lineHeight: '48px', color: '#31302F', fontWeight: '700'}}>
          Editor AI</h1>
        <form className="w-full flex flex-col items-center">
          <div className="mb-4 items-center">
            <input
              className="w-full border p-2 custom-border-opacity" style={{ 
                width: '341px', 
                height: '42px',
                top: '347px',
                left: '475px',
                borderRadius: '10px',
                fontFamily: 'Poppins',               
                fontSize: '20px',
                lineHeight: '30px'
                //position: 'absolute'
                }}
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full border login-text p-2 custom-border-opacity" style={{ 
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div> 
          <button
          
            className="bg-main-color text-white px-4 py-2 hover:bg-blue-600 items-center"   style={{
              width: '252px',
              height: '54px',
              fontFamily: 'poppins', // Corrected from 'font'
              fontWeight: '500',
              fontSize: '22px',
              //lineHeight: '33px',
              background: 'radial-gradient(50% 50% at 50% 50%, #9F4949 0%, #801212 100%)',
              borderRadius: '12px',
              //position: 'relative', // Added for 'top' and 'left' to work
              //top: '493px',
              //left: '514px'
            }}
            onClick={handleLogin}
          >
            log in
          </button>
        </form>
        <h1  
        className="text-center mt-4"
      >
         Don't have an account? <a href="/signup" className="text-main-color font-bold underline">Sign up</a></h1>
      </div>
    </div>
  );
};

export default LoginPage;


