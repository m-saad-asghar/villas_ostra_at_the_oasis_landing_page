'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from 'next/link';

export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/*Start Video One */}
            <section className="video-one">
                <div className="video-one__pattern"><img src="assets/img/pattern/video-v1-pattern.png" alt=""/></div>
                <div className="auto-container auto_container_styling">

                       <video
  width="100%"
  height="auto"
  controls
  autoPlay
  muted
>
  <source src="/assets/video/intro_video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<div className="about-one__content-bottom">
                                    <div className="about-one__content-bottom-author-box" style={{display: "flex", justifyContent: "center"}}>
                                        <div className="btn-box" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                            <Link className="thm-btn" href="#home" style={{width: 300, display: "flex", justifyContent: "center"}}>
                                                <span className="txt" style={{fontSize: 18}}>Contact Us</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                    {/* <div className="video-one__inner text-center"> */}
                        {/* <div className="shape1 float-bob-x"><img src="assets/img/shape/video-v1-shape1.png" alt=""/></div> */}
                        {/* <div className="video-one__bg" style={{backgroundImage: 'url(assets/img/background/video-v1-bg.jpg)'}}>
                        </div> */}
                        {/* <div className="title-box">
                            <h2>The Architectural Experts<br/>
                                in Property</h2>
                        </div> */}
                        {/* <div className="video-one__video-btn">
                            <a onClick={() => setOpen(true)} className="video-one__icon video-popup" data-fancybox="video-1" data-caption="">
                                <span className="icon-play-button-1"></span>
                            </a>
                        </div> */}
                    {/* </div> */}
                </div>

            </section>

            {/*End Video One */}
            {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} /> */}
        </>
    )
}
