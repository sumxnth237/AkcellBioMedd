import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function HeroCarousel() {
  const videoRef = useRef(null);
  const swiperRef = useRef(null);

  // const handleVideoEnd = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.swiper.slideNext();
  //   }
  // };

  const resetVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.log('Autoplay was prevented', error);
      });
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    
    if (swiperInstance) {
      // Add event listener for slide change
      swiperInstance.on('slideChange', () => {
        // If returning to first slide, reset and play video
        if (swiperInstance.activeIndex === 0) {
          resetVideo();
        }
      });
    }

    return () => {
      swiperInstance?.off('slideChange');
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '100vh', 
        maxHeight: '100vh', 
        minHeight: '500px' 
      }}
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={false}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div 
            className="relative w-full flex items-center justify-center"
            style={{ 
              height: '100vh', 
              maxHeight: '100vh', 
              minHeight: '500px' 
            }}
          >
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              // onEnded={handleVideoEnd}
            />
          </div>
        </SwiperSlide>
        {[2, 3].map((slide) => (
          <SwiperSlide key={slide}>
            <div 
              className="w-full flex items-center justify-center"
              style={{ 
                height: '100vh', 
                maxHeight: '100vh', 
                minHeight: '500px' 
              }}
            >
              <img
                src={`/carousel-${slide}.png`}
                alt={`Slide ${slide}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}