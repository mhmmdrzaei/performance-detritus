import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import MediaItemMD from './mediaItemMD.component';

export default function SwipeablePost({ projectImages, snippet, onSwipe, totalItems, currentIndex }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      setPosition({ x: eventData.deltaX, y: 0 });
    },
    onSwiped: (eventData) => {
      if (Math.abs(eventData.deltaX) > 100) {
        const direction = eventData.deltaX > 0 ? 'left' : 'right';
        onSwipe(direction);
      }
      setPosition({ x: 0, y: 0 }); // Reset position after swipe
    },
    trackMouse: true
  });

  return (
    <div 
      className='mobilePost'
      {...handlers}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s'
      }}
    >
      <MediaItemMD image={projectImages} snippet={snippet} />
    </div>
  );
}