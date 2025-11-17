'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one service_padding" id="why-emaar" style={{paddingTop: 0}}>
            <div className="container banner_container_main_feature component_container">
              <div>
                                    <p className="small_heading">
                                        Development Excellence

                                    </p>
                                </div>
                <div className="sec-title" style={{marginTop: 15, paddingBottom: 0}}>
                                    <h2 className="why_invest">WHY EMAAR?</h2>
                                </div>
                                <p className="about_paragraph services_cont">
                                    <span className="about_paragraph_span">Emaar Properties, one of the world's most valuable and admired integrated real estate development companies, is shaping lifestyles of the future. When you buy an Emaar property, you are investing in a name you can trust, as lifestyle you can enjoy, and a community you can thrive in, all within a city where dreams come true.</span>
                                </p>
                <div className="row service_c">

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted" 
                        >
                            <div className="feauture-one__single-text">

                             <div className="why_c">
                               <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaHouseUser className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

 <h3 className="investment_content service_num" style={{color: "#ffffff"}}>
<span className="investment_content_para service_num" style={{color: "#ffffff"}}>116,500+</span></h3>
                             </div>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_paragraph_span" style={{color: "#ffffff"}}>Delivered Units July 2024.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted"
                        >
                            <div className="feauture-one__single-text">

                               <div className="why_c">
                                <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaBuilding className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

 <h3 className="investment_content service_num" style={{color: "#ffffff"}}>
<span className="investment_content_para service_num" style={{color: "#ffffff"}}>30,000+</span></h3>
                              </div>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_paragraph_span" style={{color: "#ffffff"}}>Residences Under Development UAE.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted"
                        >
                            <div className="feauture-one__single-text">

                              <div className="why_c">
                               <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaChartLine className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

 <h3 className="investment_content service_num" style={{color: "#ffffff"}}>
<span className="investment_content_para service_num" style={{color: "#ffffff"}}>56%</span></h3>
                             </div>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_paragraph_span" style={{color: "#ffffff"}}>Increase in property sales in H1 2024.</span>
</p> 
                            </div>
                        </div>
                    </div>

                     <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="highlighted"
                        >
                            <div className="feauture-one__single-text">

                              <div className="why_c">
                               <div className="feauture-one__single-bottom">
                                <div className="icon-box">
                                    <span className="icon-plane" style={{color: "#ffffff"}}>
<FaGlobe className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>

                                {/* <h2 className="investment_content" style={{color: "#ffffff"}}>
<a href="javascript:void(0);" style={{color: "#ffffff"}}>12+ Countries</a></h2> */}

 <h3 className="investment_content service_num" style={{color: "#ffffff"}}>
<span className="investment_content_para service_num" style={{color: "#ffffff"}}>12+ Countries</span></h3>
                             </div>

<p className="investment_text" style={{color: "#ffffff"}}>
  <span className="about_paragraph_span" style={{color: "#ffffff"}}>Leading Global Market Presence.</span>
</p> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="btn_style btn_style_margin">
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
