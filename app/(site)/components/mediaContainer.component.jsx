import React from 'react';
import RepeatedMedia from './repeatedMedia.component';

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
            />
        );
      })}
    </>
  );
};

export default MediaContainer;