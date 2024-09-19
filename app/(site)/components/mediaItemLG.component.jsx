"use client"
import React from 'react';
import ReactPlayer from 'react-player'
import Image from 'next/image';
export const dynamic = "force-dynamic";
const MediaItemLG = ({ image }) => {


  if (image._type === 'projectImage') {
    return (
      <Image
        src={image.url}
        alt={image.attribution || ''}
        width={800}
        height={800}
        className={`${image.classImg || ''}`}
      />
    );
  } else if (image._type === 'project_video') {
    return (
<>
<ReactPlayer url={image.url} 
 alt={image.attribution || ''}
      loop={true}
      controls={false}
      muted={true}
      autoplay={true}
      playing={true}
      playsinline={true}
      width={"fit-content"}
      height={"auto"}
      />

</>

    );
  }
  return null;
};

export default MediaItemLG;