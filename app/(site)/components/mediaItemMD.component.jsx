"use client"
import React from 'react';
import ReactPlayer from 'react-player'
import Image from 'next/image';
export const dynamic = "force-dynamic";
const MediaItemMD = ({ image, snippet }) => {


  if (image._type === 'projectImage') {
    return (
      <Image
        src={image.asset.url}
        alt={image.attribution || ''}
        width={300}
        height={300}
        className={`${itemClass} ${image.classImg || ''}`}
      />
    );
  } else if (image._type === 'project_video') {
    return (
<>
<ReactPlayer url={snippet} 
      loop={true}
      alt={image.attribution || ''}
      controls={false}
      muted={true}
      autoplay={true}
      playing={true}
      playsinline={true}
      width={"auto"}
      height={"450px"}
      />

</>

    );
  }
  return null;
};

export default MediaItemMD;