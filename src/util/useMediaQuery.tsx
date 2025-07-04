import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
    // Initialize to false to ensure server and client render the same initially
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        const getMatches = (query: string): boolean => {
            // Prevents SSR issues
            if (typeof window !== 'undefined') {
                return window.matchMedia(query).matches
            }
            return false
        }

        const handleChange = () => {
            setMatches(getMatches(query))
        }

        const matchMedia = window.matchMedia(query)

        // Set initial value after component mounts
        setMatches(getMatches(query))

        // Listen for changes
        if (matchMedia.addListener) {
            matchMedia.addListener(handleChange)
        } else {
            matchMedia.addEventListener('change', handleChange)
        }

        return () => {
            if (matchMedia.removeListener) {
                matchMedia.removeListener(handleChange)
            } else {
                matchMedia.removeEventListener('change', handleChange)
            }
        }
    }, [query])

    return matches
}