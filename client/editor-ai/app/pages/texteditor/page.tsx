"use client"

import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import TextEditor from './TextEditor';
//import axios from 'axios';
import AskAIBot from '@/components/SaveWorkModal';

  
  const App = () => {
    const { user } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (user == null) {
        router.push("/pages/login"); // Redirect to login page if user is not authenticated
      }
    }, [user]);
  
    const [showAskAIBot, setShowAskAIBot] = useState(false);
    
    return (
  
      <div className="h-screen w-screen" style={{ backgroundColor: '#F5F0EF', width: '100%', margin:"0", minHeight: '100vh', padding: '15px' }}>
        <div className="homepage"> 
          <TextEditor /> {/* change this line once the projects page is set up */}
        </div>
      </div>
    );
  };
  
  export default App;