"use client";

import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerAreaHomeTwo = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);

    const bannerSlides = [
    'assets/images/herobanner.jpg',
    'assets/images/herobanner-2.jpg',
    'assets/images/herobanner-3.jpg',
    'assets/images/herobanner-4.jpg',
    'assets/images/herobanner-5.jpg',
  ];

  return (
    <>
      <div className="lonyo-dasyboard-shape">
        <img src="assets/images/shape/shape5.svg" alt="" />
      </div>
      <div className="lonyo-video-section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
             <div className="lonyo-hero-dashbord" data-aos="fade-right" data-aos-duration="700">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop
                >
                  {bannerSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <img src={slide} alt={`Banner slide ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {/* <div className="col-lg-5">
              <div className="lonyo-video-thumb2" data-aos="fade-left" data-aos-duration="700">
                <img src="assets/images/hero/video1.png" alt="" />
                <a className="play-btn video-init"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <img src="assets/images/shape/play-icon.svg" alt="" />
                  <div className="waves waves2 wave-1"></div>
                  <div className="waves waves2 wave-2"></div>
                  <div className="waves waves2 wave-3"></div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}

    </>
  );
};

export default BannerAreaHomeTwo;