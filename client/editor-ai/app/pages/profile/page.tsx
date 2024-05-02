"use client"

import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import Profile from './Profile';

  
  const App = () => {

    
    return (
      <div>
        <div className="homepage"> 
          <Profile />
        </div>
      </div>
    );
  };
  
export default App;