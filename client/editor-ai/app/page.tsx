"use client"
import './styles/globals.css'
import { useRouter } from 'next/navigation';
import { useEffect, useContext } from 'react';
import { useAuth } from './context/AuthContext';


function App() {
  const router = useRouter();
  const { user} = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/pages/login');
    }
  }, [user, router]);
}

export default App;