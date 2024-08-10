import React from 'react';
import RepeatedMedia from './repeatedMedia.component';
import { v4 as uuidv4 } from "uuid";
const MediaContainer = ({ projectImages, snippet }) => {

  return (
    <>
      {projectImages.map((item) => {
        const image = item[0]

        return (
        
            <RepeatedMedia 
              item={item} 
              snippet={snippet}
              count={18}
              key={uuidv4()}
            />
        );
      })}
    </>
  );
};

export default MediaContainer;