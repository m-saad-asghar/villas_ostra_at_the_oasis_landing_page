'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function  Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one feature_wrap" id="why-invest-in-dubai">
            <div className="container banner_container_main_feature component_container">
              <div>
                                    <p className="small_heading">
                                        DETAILS
                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">WHY INVEST IN DUBAI?</h2>
                                </div>
                <div className="row feature_row">

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{marginBottom: 0}} 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaDollarSign className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

<h2 className="investment_content">
<a href="javascript:void(0);">Greater Rental Profits</a></h2>

<p className="investment_text">
  <span className="about_para_span">Gross rental yields for investors range from 5% to 9%.</span>
</p> 
                            </div>
                        </div>
                    </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaHouseUser className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">Premium Property</a></h2>
<p className="investment_text">
  <span className="about_para_span">Property rates per sq. ft. remain lower than many cities.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaMoneyBill className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
Tax-Free Property</a></h2>

<p className="investment_text">
  <span className="about_para_span">Once you buy a property, you will pay no taxes ever again.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaWalking className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">High Accessibility</a></h2>
<p className="investment_text">
  <span className="about_para_span">The city has direct flights from all the major cities in the world.</span>
</p>

                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}} 
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaMap className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
Touristic Appeal</a></h2>

<p className="investment_text">
  <span className="about_para_span">World-class shopping malls, attractions, hotels and beautiful beaches.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaShieldAlt className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">Communal Safety</a></h2>

<p className="investment_text">
  <span className="about_para_span">Dubai is extremely safe and ideal for families and individuals.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single"  style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaChartLine className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">Trade Hub & Logistics</a></h2>
<p className="investment_text">
  <span className="about_para_span">Dubai is a major attraction to foreign investors in different sectors.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaIdCard className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">UAE Golden Visa</a></h2>
<p className="investment_text">
  <span className="about_para_span">UAE residency: Golden & Green Visas now for property investors.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaLightbulb className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
Sustainable Planning</a></h2>
<p className="investment_text">
  <span className="about_para_span">Dubai invests heavily in tech, green energy, health & education.</span>
</p>
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{paddingTop: 0}}
                        // style={{minHeight: 250}}
                        >
                            <div className="feauture-one__single-text">

                              <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane">
<FaGift className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                <h2 className="investment_content">
<a href="javascript:void(0);">
Emaar U Rewards</a></h2>
<p className="investment_text">
  <span className="about_para_span">Invest AED 20M+ for Platinum, AED 10M+ for Gold tier.</span>
</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="btn_style_invest">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            REGISTER INTEREST
          </button>
</div>

        </section>
       
        </>
    )
}
