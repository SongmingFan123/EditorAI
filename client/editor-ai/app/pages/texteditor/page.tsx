"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import TextEditor from './TextEditor';
import axios from 'axios';



const App = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/pages/login"); // Redirect to login page if user is not authenticated
    }
  }, [user]);


  return (

    <div className="h-screen w-screen" style={{ backgroundColor: '#F5F0EF', width: '100%', minHeight: '100vh', padding: '15px' }}>
      <div className="homepage"> 
        <TextEditor documentID={documentID} userID={user?.uid || ``} newDoc={newDoc} docName={docName} /> {/* change this line once the projects page is set up */}
      </div>
    </div>
  );
};

export default App;
