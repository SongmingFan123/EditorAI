"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';
import TextEditor from './TextEditor';
import SuggestionBox from './SuggestionBox';
import AskAIBot from '@/components/AskAi';

//export const metadata = {
//  title: "Editor AI Text Editor"}

const texteditpage = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/pages/login"); // Redirect to login page if user is not authenticated
    }
  }, [user]);

  const priorityProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects = [{ name: 'Project 3' }, { name: 'Project 4' }];

  const [showAskAIBot, setShowAskAIBot] = useState(false);

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: '#F5F0EF', width: '100%', minHeight: '100vh', padding: '15px' }}>
      <div className="homepage"> 
        <TextEditor />
      </div>
    </div>
  );
};

export default texteditpage;
