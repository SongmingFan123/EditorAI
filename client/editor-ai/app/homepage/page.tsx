"use client"

import React from 'react';
import ProjectSection from './projectsection';
import SearchBar from './searchbar';

import Header from '../Header';
import ActionButton from './ActionButton';

const homepage = () => {
  const priorityProjects = [{ name: 'Project 1' }, { name: 'Project 2' }];
  const recentProjects = [{ name: 'Project 3' }, { name: 'Project 4' }];

  return (
    
    <div className = "homepage"> 

        <Header />
        <ProjectSection title={"Editor AI"}/>
        <SearchBar />
        <ActionButton text="Create New Project" onClick={() => console.log("hi")}/>
        {/* <ActionButton text="text" onClick={() => console.log("hi")}/> */}
    </div>
    
  );
};

export default homepage;