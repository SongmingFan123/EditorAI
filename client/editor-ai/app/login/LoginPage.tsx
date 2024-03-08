// pages/LoginPage.js
"use client"

import { useState } from 'react';
import Image from 'next/image';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implement your authentication logic here
    console.log('Logging in with:', email, password);
    // For a real application, you would make a request to a server for authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <h1 className="text-2xl font-semibold mb-6">Editor AI</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              className="w-full border p-2 rounded"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              className="w-full border p-2 rounded"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
