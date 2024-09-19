"use client"
import React from 'react';
import ReactPlayer from 'react-player'
import Image from 'next/image';
export const dynamic = "force-dynamic";
const MediaItemMD = ({ image, snippet }) => {


  if (image._type === 'projectImage') {
    return (
      // <Image
      //   src={image.url}
      //   // alt={image.attribution || ''}
      //   width={800}
      //   height={800}
      //   // className={`${image.classImg || ''}`}
      // />
      <img src={image.url} alt={image.attribution || ''} />
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