import React from "react";
import { ShimmerCircularImage } from "react-shimmer-effects";

export function ImageWithFallback({ src, size, alt, className }) {
  const [status, setStatus] = React.useState('loading'); // 'loading' | 'loaded' | 'error'
  const [imageSrc, setImageSrc] = React.useState(src);

  React.useEffect(() => {
    setStatus('loading');
    setImageSrc(src);

    const timeout = setTimeout(() => {
      setStatus((prev) => {
        if (prev === 'loading') {
          setImageSrc('/images/team/sem_foto_037.png');
          return 'error';
        }
        return prev;
      });
    }, 15000);

    return () => clearTimeout(timeout);
  }, [src]);

  return (
    <>
      {status === 'loading' && <ShimmerCircularImage size={size} />}
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        style={{ display: status === 'loading' ? 'none' : 'block' }}
        referrerPolicy="no-referrer"
        onLoad={() => setStatus('loaded')}
        onError={() => {
          setStatus('error');
          setImageSrc('/images/team/sem_foto_037.png');
        }}
      />
    </>
  );
}