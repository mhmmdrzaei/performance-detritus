import React from 'react';
import MediaItem from './mediaItemSM.component';

const RepeatedMedia = ({ item, count, index }) => {
  const clusterClass = `repeatedItem-${index + 1}`;

  return (
    <div className={clusterClass}>
      {Array(count).fill().map((_, itemIndex) => (
        <div key={`${item._key}-${itemIndex}`}>
          <MediaItem item={item} index={itemIndex} />
        </div>
      ))}
    </div>
  );
};

export default RepeatedMedia;