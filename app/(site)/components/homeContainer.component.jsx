"use client";

import { useState, useEffect } from "react";
import SwipeablePost from "./swipableSingle.component";
import MediaContainer from "./mediaContainer.component";
import Link from 'next/link';
import ReactVideo from "./reactvideo.component";
import MediaItemMD from "./mediaItemMD.component";

export const dynamic = "force-dynamic";

export default function HomeContainer({ projects }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSwipe = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = direction === 'left' ? prevIndex + 1 : prevIndex - 1;
      return Math.max(0, Math.min(newIndex, projects.length - 1));
    });
  };

  if (!projects || projects.length === 0) {
    return <div>No projects to display</div>;
  }

  const currentProject = projects[currentIndex];

  return (
    <>
      {isMobile ? (
        <>

        
        <Link href={`/${currentProject.slug}`} key={currentProject._id} className="mobileSingle">
         <SwipeablePost
           projectImages={currentProject.projectImages[0]}
           snippet={currentProject.snippet}
           onSwipe={handleSwipe}
         />
       </Link>
       <p className="shuffleText">Shuffle for new items </p>

         
          <div className="swipe-buttons">
          {currentIndex < projects.length - 1 && (
      <button className="left" onClick={() => handleSwipe('left')}>^</button>
    )}
            {currentIndex > 0 && (
      <button className="right" onClick={() => handleSwipe('right')}>^</button>
    )}

          </div>
        </>
      ) : (
        <>
          {projects.map((project, index) => (
            <section key={project._key} className={`repeated repeatedItem-${index + 1}`}>
              <Link href={`/${project.slug}`} key={project._id}>
                <MediaContainer
                  projectImages={project.projectImages}
                  snippet={project.snippet}
                />
              </Link>
            </section>
          ))}
        </>
      )}
    </>
  );
}