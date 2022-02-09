import { useState, useEffect } from 'react'

interface ScreenSize {
    width: number, height: number
}

export const useWindow = (): { screenSize: ScreenSize } => {

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleSetScreenSize = () => setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        window.addEventListener('resize', handleSetScreenSize);
        return (() => window.removeEventListener('resize', handleSetScreenSize))
    }, [screenSize])

    return { screenSize }


}
