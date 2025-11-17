'use client'
import { useState, useEffect } from 'react'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image';
import ContactFormMain from '@/components/ContactFormMain';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}

export default function Banner() {
  
  return (
    <>
    
    <section className="main-slider main-slider-one" id="home">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none edge_to_edge full_height">                    
        <SwiperSlide className="swiper-slide">
          <div className="image-layer main_banner" 
          style={{backgroundImage: 'url(assets/img/villa_oasis.jpg)'}}
          >
            </div>
            <div className="container banner_container_main banner_wrapper full_height">
                <div className="main-slider-one__single slider_wrapper">
                 <div className='main_container_full_width'>
                  <div style={{marginTop: 20}} className='logo_appear'>
                     <div className='logo_styling'>
  <Image
   src="/assets/icon/emaar_logo.png"
    alt="emaar_logo"
    height={55}
    width={300}
    className='main_logo_styling'
  />
  
</div>
                  </div>
                  <div className='row row_wrapper center remove_extra_spacing'>
               <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 main_container">

                 <div className='logo_styling small_logo' style={{marginBottom: 10}}>
  <Image
     src="/assets/icon/emaar_logo.png"
    alt="emaar_logo"
    height={55}
    width={300}
    className='main_logo_styling'
  />
  
</div>
                     <div className="container component_container">

                   

  <div className="row banner_container">
    <div className="col-lg-12 col-md-12">
      <div className="main-slider-one__content">
        <div className='banner_text_container'>
<p className="logo_heading">
  PALACE: VILLAS OSTRA AT THE OASIS
</p>
        <h1 className='heading_middle content'>A LIMITED COLLECTION OF WATERFRONT BRILLIANCE <span className='line-break'>BY EMAAR</span></h1>
        </div>
      </div>

        <p className="down_styling">
  SPACIOUS 4, 5 & 6-BEDROOM STANDALONE VILLAS STARTING FROM AED 13.13M*
</p>

<div className="resp_usd">
                        <p className="down_styling" style={{ lineHeight: '1.5' }}>
                          *USD 3.58M / EUR 3.1M
                        </p>

                        <p className="down_styling" style={{ lineHeight: '1.5' }}>
                          *Subject to Availability
                        </p>

                        <p className="down_styling" style={{ lineHeight: '1.5' }}>
                          *The Global Prices may vary as per the Exchange Rate
                        </p>
                      </div>

    </div>
  </div>
</div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 main_container">
                <ContactFormMain/>
                </div>
                </div>
                 </div>

               

                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
};

