import React from 'react';
// import ReactPlayerLoader  from '@brightcove/react-player-loader';
import Image from 'next/image';

const MediaItem = ({ item, index }) => {
  const itemClass = `item-${index + 1}`;

  if (item._type === 'projectImage') {
    return (
      <Image
        src={item.asset.url}
        alt={item.attribution || ''}
        width={50}
        height={30}
        className={`${itemClass} ${item.classImg || ''}`}
      />
    );
  } else if (item._type === 'project_video') {
    return (
      <p>video</p>
      // <ReactPlayerLoader
      //   accountId="your-account-id"  // You'll need to provide this
      //   videoId={item.asset._ref}    // Assuming this is how you store the video ID
      //   options={{
      //     controls: false,
      //     loop: true,
      //     muted: true,
      //     autoplay: true,
      //     width: 50,
      //     height: 30,
      //   }}
      //   onSuccess={(success) => {
      //     console.log('Video loaded successfully', success);
      //   }}
      //   onFailure={(error) => {
      //     console.error('Failed to load video', error);
      //   }}
      // />
    );
  }
  return null;
};

export default MediaItem;