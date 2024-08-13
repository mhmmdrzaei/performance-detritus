"use client"
import Link from 'next/link'
import MediaItemMD from './mediaItemMD.component'
import React, { useState } from 'react';

export default function ProjectList({ projects }) {
  const itemsPerStack = 6;
  const totalStacks = Math.ceil(projects.length / itemsPerStack);
  const [currentStackIndex, setCurrentStackIndex] = useState(0);
  const [stacks, setStacks] = useState([...Array(totalStacks).keys()]);

  const scrollUp = () => {
    if (currentStackIndex > 0) {
      setCurrentStackIndex(currentStackIndex - 1);
    }
  };

  const scrollDown = () => {
    if (currentStackIndex < totalStacks - 1) {
      setCurrentStackIndex(currentStackIndex + 1);
    } else {
      // Move the first stack to the end
      setStacks(prevStacks => [...prevStacks.slice(1), prevStacks[0]]);
      setCurrentStackIndex(0);
    }
  };

  return (
    <>
    <main className="categoryPage">
    {stacks.map((stackIndex) => (
        <ul 
          key={stackIndex} 
          className="stacked-list"
          style={{
            zIndex: stackIndex === currentStackIndex ? 1 : 0,
          }}
        >
          {projects.slice(stackIndex * itemsPerStack, (stackIndex + 1) * itemsPerStack).map((project) => (
            <li key={project._id}>
              <Link href={`/${project.slug}`}>
                <MediaItemMD image={project.projectImages[0]} snippet={project.snippet} />
              </Link>
            </li>
          ))}
        </ul>
      ))}


            <Navigation 
        onScrollUp={scrollUp} 
        onScrollDown={scrollDown} 
        showUp={currentStackIndex > 0}
        showDown={true} 
      />
        </main>
    </>
  );
}
const Navigation = ({ onScrollUp, onScrollDown, showUp, showDown }) => {
  return (
    <div className="navigation">
      {showUp && <button className="topButton"onClick={onScrollUp}>↑</button>}
      {showDown && <button onClick={onScrollDown}>↓</button>}
    </div>
  );
};