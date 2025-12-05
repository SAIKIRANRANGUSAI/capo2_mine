
"use client";
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';
import Breadcrumb from '@/common/Breadcrumb';



const HowItWorks = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  return (
    <>
      <Breadcrumb title="How It Works" subtitle="How It Works" />
      <div className="lonyo-section-padding1 py-5">
        <div className="container">
          <div className="row">
            <div>
              <div className="col-lg-12">
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
            </div>
            </div>
          </div>
        </div>
      </div>

        <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"teM0q0rzVXY"}
      />

    </>
  );
};

export default HowItWorks;