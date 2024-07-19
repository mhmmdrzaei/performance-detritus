import { useSwipeable } from 'react-swipeable'
import { useState } from 'react'
import MediaItemMD from './mediaItemMD.component'

export default function SwipeablePost({ projectImages, snippet, onSwipe }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      setPosition({ x: eventData.deltaX, y: 0 })
    },
    onSwiped: (eventData) => {
      if (Math.abs(eventData.deltaX) > 100) {
        onSwipe(eventData.deltaX > 0 ? 'left' : 'right')
      } else {
        setPosition({ x: 0, y: 0 })
      }
    },
    trackMouse: true
  })

  return (
    <div
      {...handlers}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s'
      }}
    >
      <MediaItemMD image={projectImages} snippet={snippet} />
    </div>
  )
}