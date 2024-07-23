"use client"
import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import Image from 'next/image';

export const dynamic = "force-dynamic";

const MediaItem = ({ item, index, snippet }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemClass = `item-${index + 1}`;

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const visibilityClass = isVisible ? 'visible' : '';

  if (item._type === 'projectImage') {
    return (
      <div 
        className={`media-item ${itemClass} ${visibilityClass}`} 
        onMouseEnter={handleMouseEnter}
      >
        <Image
          src={item.asset.url}
          alt={item.attribution || ''}
          width={100}
          height={100}
          className={item.classImg || ''}
        />
      </div>
    );
  } else if (item._type === 'project_video') {
    return (
      <div 
        className={`media-item ${itemClass} ${visibilityClass}`}
        onMouseEnter={handleMouseEnter}
      >
        <ReactPlayer 
          url={snippet} 
          loop={true}
          alt={item.attribution || ''}
          controls={false}
          muted={true}
          playing={true}
          playsinline={true}
          // height={100}
        />
      </div>
    );
  }
  return null;
};

export default MediaItem;