"use client"
import React from 'react';
import ReactPlayer from 'react-player'
import Image from 'next/image';
export const dynamic = "force-dynamic";
const MediaItem = ({ item, index,snippet }) => {
  const itemClass = `item-${index + 1}`;

  if (item._type === 'projectImage') {
    return (
      <Image
        src={item.asset.url}
        alt={item.attribution || ''}
        width={100}
        height={100}
        className={`${itemClass} ${item.classImg || ''}`}
      />
    );
  } else if (item._type === 'project_video') {
    return (
<>
<ReactPlayer url={snippet} 
      loop={true}
      alt={item.attribution || ''}
      controls={false}
      muted={true}
      autoplay={true}
      playing={true}
      playsinline={true}
      height={100}
      />

</>

    );
  }
  return null;
};

export default MediaItem;