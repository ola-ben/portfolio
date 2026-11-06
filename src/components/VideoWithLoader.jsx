import { useState, useRef, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

/**
 * Muted, looping video with a loading spinner.
 * - inViewOnly: the video only downloads/plays while visible on screen
 *   (keeps the grid fast), and pauses when scrolled away.
 * - controls: show native controls (used in the lightbox so viewers can unmute).
 */
export default function VideoWithLoader({
  src,
  poster,
  className = '',
  wrapperClassName = '',
  inViewOnly = false,
  controls = false,
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [active, setActive] = useState(!inViewOnly)
  const wrapperRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    setLoaded(false)
  }, [src])

  useEffect(() => {
    if (!inViewOnly || !wrapperRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          videoRef.current?.play().catch(() => {})
        } else {
          videoRef.current?.pause()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [inViewOnly])

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full h-full flex items-center justify-center bg-paper ${wrapperClassName}`}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/[0.03] z-10 pointer-events-none">
          <Loader2 size={18} className="animate-spin text-ink/35" />
        </div>
      )}
      <video
        ref={videoRef}
        src={active ? src : undefined}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls={controls}
        preload={active ? 'auto' : 'none'}
        onLoadedData={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  )
}
