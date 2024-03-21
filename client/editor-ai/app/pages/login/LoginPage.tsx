// pages/LoginPage.js
"use client"

import { useState } from 'react';
import Image from 'next/image';
//import { UserAuth } from '../../context/AuthContext'; // Replace '../path/to/AuthContext' with the actual path to AuthContext

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { emailSignIn } = UserAuth(); // Add this line to get the emailSignIn function from the AuthContext

  // const handleLogin = async () => {
  //   // Implement your authentication logic here
  //   console.log('Logging in with:', email, password);
  //   try {
  //     const user = await emailSignIn(email, password);
  //     alert('Logged in ');
  //   }
  //   catch (error) {
  //     alert('Error logging in:'+ error);
  //   }
  //   // For a real application, you would make a request to a server for authentication
  // };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="bg-brand-tan p-8 rounded shadow-md">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h1 className="text-2xl font-semibold mb-6">Editor AI</h1>
        <form>
          <div className="mb-4">
            <input
              className="w-full border p-2 rounded"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full border p-2 rounded"
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-brand-red text-white px-4 py-2 rounded hover:bg-blue-600"
            type="button"
            //onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <h1 className="text-center mt-4">Dont have an account? <a href="/signup" className="text-brand-red">Sign up</a></h1>
      </div>
    </div>
  );
};

export default LoginPage;
