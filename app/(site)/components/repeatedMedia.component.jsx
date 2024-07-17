import React from 'react';
import MediaItem from './mediaItemSM.component';

const RepeatedMedia = ({ item, count,snippet }) => {
  
  return (
    <>

      {Array(count).fill().map((_, itemIndex) => (
          <MediaItem key={`${item._key}-${itemIndex}`} item={item} index={itemIndex} snippet={snippet} className={itemIndex} />


      ))}
    
    
    </>



  )





};

export default RepeatedMedia;