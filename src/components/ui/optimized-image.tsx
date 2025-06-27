import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  onLoad
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Extract directory, base name and extension
  const pathParts = src.split('/');
  const filename = pathParts.pop() || '';
  const directory = pathParts.join('/');
  const baseName = filename.replace(/\.(webp|jpg|jpeg|png)$/i, '');
  const extension = filename.match(/\.(webp|jpg|jpeg|png)$/i)?.[1] || 'webp';
  
  // Generate srcset for responsive images
  const srcSet = `
    ${directory}/optimized/${baseName}-sm.${extension} 400w,
    ${directory}/optimized/${baseName}-md.${extension} 600w,
    ${directory}/optimized/${baseName}-lg.${extension} 800w,
    ${directory}/optimized/${baseName}-xl.${extension} 1200w
  `.trim();
  
  // Fallback srcset for browsers that don't support webp
  const fallbackSrcSet = extension === 'webp' ? `
    ${directory}/optimized/${baseName}-sm.jpeg 400w,
    ${directory}/optimized/${baseName}-md.jpeg 600w,
    ${directory}/optimized/${baseName}-lg.jpeg 800w,
    ${directory}/optimized/${baseName}-xl.jpeg 1200w
  `.trim() : '';
  
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);
  
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };
  
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Placeholder/Skeleton */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : 'auto' 
          }}
        />
      )}
      
      {/* Main Image */}
      <picture>
        {/* WebP source with srcset */}
        {extension === 'webp' && fallbackSrcSet && (
          <>
            <source
              type="image/webp"
              srcSet={isInView ? srcSet : undefined}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <source
              type="image/jpeg"
              srcSet={isInView ? fallbackSrcSet : undefined}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </>
        )}
        
        <img
          ref={imgRef}
          src={isInView ? src : undefined}
          srcSet={isInView && !fallbackSrcSet ? srcSet : undefined}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
        />
      </picture>
    </div>
  );
}