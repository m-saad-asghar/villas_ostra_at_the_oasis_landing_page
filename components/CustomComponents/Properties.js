"use client";
import Link from "next/link"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaHouseUser, FaChartLine, FaCity, FaGolfBall, FaTree, FaStore, FaBiking, FaTruckMonster, FaHotel, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaStar } from "react-icons/fa6";
import { Home, Building, Trees, Umbrella, UmbrellaIcon, TreePine, Activity, Dumbbell, Sailboat, MapPin, Leaf, TrendingUp } from "lucide-react";
export default function Properties() {
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
    return (
        <>
            <section className="custom_container properties_section" id="amenities">
              <div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content_why_invest'>UNMATCHED EQUESTRIAN OPULENCE. ENDLESS LUXURY AWAITS.</h1>
        </div>
      </div>
      <div className=''>
        <p className="down_styling para_styling">
 The final collection of 4, 5, and 6-bedroom branded villas at The Oasis by Emaar offers a luxurious waterfront lifestyle with breathtaking views, private gardens, and infinity pools. Residents enjoy exclusive access to lagoons, wellness and spa facilities, jogging and cycling tracks, high-end retail, gourmet dining, and pristine beaches — all within a vibrant, resort-style community.
</p>

      </div>

             <div className="themed_icons">
                <div className="row portions_styling">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#9f8151 "}}>
                                          <Image
                        src="/assets/icon/oasis_icons/beach_access.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="icons_styling"
                      />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 className="amenities_styling">Beach Access</h2>
                                    {/* <p>Take a stroll on the private beach to relax and unwind.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="shadow_line">
                        <hr className="line_styling" />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#9f8151 "}}>
                                         <Image
                       src="/assets/icon/oasis_icons/cycling.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="icons_styling"
                      />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 className="amenities_styling">Jogging & Cycling Trails</h2>
                                    {/* <p>Seven exclusive venues for fitness, leisure, and social con-nection across the community.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="shadow_line">
                        <hr className="line_styling" />
                    </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#9f8151 "}}>
                                          <Image
                        src="/assets/icon/oasis_icons/swimming.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="icons_styling"
                      />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 className="amenities_styling">Swimming Pools & Lagoon</h2>
                                    {/* <p>Over 10 km of scenic tracks, trails and loops.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="shadow_line">
                        <hr className="line_styling" />
                    </div>
                    </div>

                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#9f8151 "}}>
                                         <Image
                        src="/assets/icon/oasis_icons/play_ground.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="icons_styling"
                      />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 className="amenities_styling">Parks & Playgrounds</h2>
                                    {/* <p>A lively destination with supermarkets, dining venues, and boutique retail experiences.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="shadow_line">
                        <hr className="line_styling" />
                    </div>
                    </div>
                </div>

                <div className="row portions_styling">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#9f8151 "}}>
                                          <Image
                        src="/assets/icon/oasis_icons/fitness_facility.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="icons_styling"
                      />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 className="amenities_styling">Fitness Facilities</h2>
                                    {/* <div>Four uniquely designed parks encircling a vibrant central park.</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="shadow_line">
                        <hr className="line_styling" />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#9f8151 "}}>
                                         <Image
                       src="/assets/icon/oasis_icons/spa.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="icons_styling"
                      />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 className="amenities_styling">Spa Facilities</h2>
                                    {/* <p>Seven exclusive venues for fitness, leisure, and social con-nection across the community.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="shadow_line">
                        <hr className="line_styling" />
                    </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#9f8151 "}}>
                                          <Image
                        src="/assets/icon/oasis_icons/clubhouse.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="icons_styling"
                      />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 className="amenities_styling">Clubhouse</h2>
                                    {/* <p>Seven exclusive venues for fitness, leisure, and social con-nection across the community.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="shadow_line">
                        <hr className="line_styling" />
                    </div>
                    </div>

                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            
                            <div className="service-one__single-inner">
                                
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#9f8151 "}}>
                                         <Image
                        src="/assets/icon/oasis_icons/retail.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="icons_styling"
                      />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2 className="amenities_styling">Community & Retails Centres</h2>
                                    {/* <p>A lively destination with supermarkets, dining venues, and boutique retail experiences.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="shadow_line">
                        <hr className="line_styling" />
                    </div>
                    </div>
                </div>
               
            </div>

        <div className="import_image">
       </div>
            </section>
        </>
    )
}