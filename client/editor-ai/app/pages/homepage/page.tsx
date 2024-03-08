"use client"

import React from 'react';
import ProjectSection from './ProjectSection';
import SearchBar from './SearchBar';
import Header from '../../components/Header';
import ActionButton from './ActionButton';

const homepage = () => {
  const priorityProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects = [{ name: 'Project 3' }, { name: 'Project 4' }];

  return (
    
    <div className = "p-0"> 

        <Header />

        <SearchBar />
        <div className="flex">
          <ActionButton text="Create Document" href='./texteditor'/>
          <ActionButton text="Upload Document" />

        </div>
        <ProjectSection title={"Priority Projects"}/>
        <ProjectSection title={"Recent Projects"}/>
    </div>
    
  );
};

export default homepage;