"use client"
import React from 'react';
import ReactPlayer from 'react-player'
export const dynamic = "force-dynamic";
const ReactVideo = ({ video }) => {


return (
    <ReactPlayer url={video} 
      loop={true}
      controls={false}
      muted={true}
      autoplay={true}
      playing={true}
      playsinline={true}
      wrapper={"section"}
      class="bg-video"
      width={"100%"}
      height={"auto"}
      />

)


};

export default ReactVideo;