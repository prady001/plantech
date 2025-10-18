import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface HorizontalCarouselProps {
  children: React.ReactNode[];
  className?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  title?: string;
  subtitle?: string;
}

export function HorizontalCarousel({
  children,
  className,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  title,
  subtitle,
}: HorizontalCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = children.length;

  const goToSlide = useCallback((slideIndex: number) => {
    if (isTransitioning || slideIndex === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, currentSlide]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }, [isTransitioning, currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
  }, [isTransitioning, currentSlide, totalSlides, goToSlide]);

  // Auto-play functionality
  React.useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, autoPlayInterval);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoPlay, autoPlayInterval, totalSlides]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
      }, autoPlayInterval);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Header with title and navigation */}
      {(title || subtitle) && (
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div 
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides Container */}
        <div 
          ref={containerRef}
          className="overflow-hidden"
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {children.map((child, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="max-w-6xl mx-auto">
                  {child}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - sempre visíveis no mobile */}
        {showArrows && totalSlides > 1 && (
          <>
            <Button
              variant="glass"
              size="icon-lg"
              className={cn(
                "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10",
                "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300",
                "hover:scale-110 active:scale-95",
                "w-10 h-10 sm:w-12 sm:h-12"
              )}
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
            
            <Button
              variant="glass"
              size="icon-lg"
              className={cn(
                "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10",
                "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300",
                "hover:scale-110 active:scale-95",
                "w-10 h-10 sm:w-12 sm:h-12"
              )}
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </>
        )}

        {/* Dots Navigation */}
        {showDots && totalSlides > 1 && (
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {children.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                  "hover:scale-125 active:scale-95",
                  index === currentSlide
                    ? "bg-primary shadow-lg scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Slide Counter - oculto no mobile */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 hidden sm:block">
          <div className="bg-background/80 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 border">
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Individual slide content component
interface SlideContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideContent({ children, className }: SlideContentProps) {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  );
}
