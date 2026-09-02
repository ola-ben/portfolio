import { useState, useRef, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function ImageWithLoader({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  loading = 'lazy',
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Reset loaded state if src changes
    setLoaded(false)
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src])

  return (
    <div className={`relative w-full h-full flex items-center justify-center bg-paper ${wrapperClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/[0.03] z-10">
          <Loader2 size={18} className="animate-spin text-ink/35" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  )
}
