"use client"

import React from 'react';
import Head from 'next/head';
import ProjectSection from './ProjectSection';
import SearchBar from './SearchBar';
import Header from '../../components/Header';
import ActionButton from './ActionButton';

const homepage = () => {
  const priorityProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects = [{ name: 'Project 3' }, { name: 'Project 4' }];

  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" />
    </Head>

      <div className = "p-0"> 

  
        <SearchBar />
        <div className="flex font-poppins">
        <ActionButton text="Create Document" />
        <ActionButton text="Upload Document" />

        </div>
        <div className="flex font-newsreader">
        <ProjectSection title={"Priority Projects"}/>
        <ProjectSection title={"Recent Projects"}/>
        </div>
      </div>

      </>
  );
};

export default homepage;