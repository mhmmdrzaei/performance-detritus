"use client"

import { usePathname } from 'next/navigation';

export default function RefreshButton() {
    const pathname = usePathname();

    const handleRefresh = () => {
        window.location.reload()
    }

    // Only render the button if we're on the home page
    if (pathname !== '/') {
        return null;
    }

    return (
        <button className="shuffleButton" onClick={handleRefresh}>Shuffle</button>
    )
}