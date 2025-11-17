'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Map() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one service_padding" id="map" style={{paddingTop: 0}}>
             <div className="main-slider-one__content">
        <div className='custom_container'>

        <h1 className='heading_middle content_why_invest'>LIFE, CLOSE TO EVERYTHING</h1>

         <div className=''>
        <p className="down_styling para_styling">
 Ideally situated in a prime Dubai waterfront location, Palace Villas – Ostra offers residents seamless access to the city’s most sought-after destinations. From luxury retail and fine dining to top schools, leisure hubs, and major highways, everything you need is just minutes away, combining the tranquillity of waterfront living with the convenience of city life.
</p>

      </div>

      <div className="themed_icons">
                      <div className="row portions_styling">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                              <div className="service-one__single custom_height">
                                  
                                  <div className="service-one__single-inner">
                                      
                                      <div className="icon-box">
                                          <span className="icon-plane" style={{color: "#9f8151 "}}>
                                                <Image
                              src="/assets/icon/oasis_icons/airport.svg"
                              alt="world_class_amenities"
                              height={50}
                              width={300}
                              className="icons_styling"
                            />
                                          </span>
                                      </div>
                                      <div className="content-box">
                                          <p className="amenities_styling">18 Mins</p>
                                          <div>Al Maktoum Int'l Airport.</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="shadow_line">
                              <hr className="line_styling" />
                          </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                              <div className="service-one__single custom_height">
                                  
                                  <div className="service-one__single-inner">
                                      
                                      <div className="icon-box">
                                          <span className="icon-plane" style={{color: "#9f8151 "}}>
                                               <Image
                             src="/assets/icon/oasis_icons/dubai_hills.svg"
                              alt="world_class_amenities"
                              height={50}
                              width={300}
                              className="icons_styling"
                            />
                                          </span>
                                      </div>
                                      <div className="content-box">
                                          <p className="amenities_styling">20 Mins</p>
                                          <p>Dubai Hills Estate, Dubai Hills Mall & Dubai Hills Golf Course.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="shadow_line">
                              <hr className="line_styling" />
                          </div>
                          </div>
      
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                              <div className="service-one__single custom_height">
                                  
                                  <div className="service-one__single-inner">
                                      
                                      <div className="icon-box">
                                          <span className="icon-plane" style={{color: "#9f8151 "}}>
                                                <Image
                              src="/assets/icon/oasis_icons/palm_jumeriah.svg"
                              alt="world_class_amenities"
                              height={50}
                              width={300}
                              className="icons_styling"
                            />
                                          </span>
                                      </div>
                                      <div className="content-box">
                                          <p className="amenities_styling">28 Mins</p>
                                          <p>Dubai Marina & Dubai Marina Mall.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="shadow_line">
                              <hr className="line_styling" />
                          </div>
                          </div>

                           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s">
                              <div className="service-one__single custom_height">
                                  
                                  <div className="service-one__single-inner">
                                      
                                      <div className="icon-box">
                                          <span className="icon-plane" style={{color: "#9f8151 "}}>
                                               <Image
                             src="/assets/icon/oasis_icons/burj_khalifa.svg"
                              alt="world_class_amenities"
                              height={50}
                              width={300}
                              className="icons_styling"
                            />
                                          </span>
                                      </div>
                                      <div className="content-box">
                                          <p className="amenities_styling">35 Mins</p>
                                          <p>Downtown Dubai and Dubai Mall.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="shadow_line">
                              <hr className="line_styling" />
                          </div>
                          </div>
      
                      </div>
                     
                  </div>
        </div>
      </div>

            <div className="map_container">
<img src="assets/img/oasis_map.jpg" alt="" className="map_styling"/>
            </div>

        </section>
       
        </>
    )
}
