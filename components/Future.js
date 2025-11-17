"use client";
import Link from "next/link"
import Image from "next/image";
import { FaBuilding, FaCity, FaDollarSign, FaGift, FaHouseUser, FaTree } from "react-icons/fa";
export default function Future() {
    return (
        <>
            <section className="about-one future_styling" id="the-future-of-waterfront-living">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except component_container">
                    <div className="row minus_styling">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling">
                                        <span className="welcome_emaar_styling_span">
                                            THE FUTURE OF WATERFRONT LIVING
                                        </span>
                                    </h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_paragraph">
    <span className="about_paragraph_span">Discover the perfect harmony of tranquillity, wellness, and sophistication at Dubai Creek Harbour. This vibrant community blends serene waterfront living with lively promenades, wellness facilities, and breathtaking views of the marina and Dubai skyline.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">Enjoy sunrise yoga by the water, alfresco dining, or leisurely strolls along the picturesque creek. Relax by an infinity pool overlooking the Burj Khalifa or explore the neighbourhood on a scenic bike ride.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">Whether for living or investment, Dubai Creek Harbour offers exceptional value with its collection of 1–3 bedroom apartments, family homes, and luxury penthouses — all crafted with contemporary elegance and world-class design.</span>
</p>
                                </div>

                                <div className="row future_row">
                                
                                                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaBuilding className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">711,399 sqm</span></h3>
                                
                                <p className="investment_text">
    <span className="about_paragraph_span">Serviced Apartments.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                  {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaCity className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

                                <h3 className="investment_content">
<span className="investment_content_para">7.4 million sqm</span></h3>
                            
                                <p className="investment_text">
    <span className="about_paragraph_span">Residential Space.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                
                                                     {/* <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="feauture-one__single" 
                                                        >
                                                            <div className="feauture-one__single-text">
                                
                                                              <div className="feauture-one__single-bottom">
                                                                <div className="icon-box">
                                                                    <span className="icon-plane">
                                <FaTree className="icon-plane" size={30}/> 
                                                                    </span>
                                                                    
                                                                </div>
                                                            </div>

<h3 className="investment_content">
<span className="investment_content_para">500,000 sqm</span></h3>
                                
                                <p className="investment_text">
    <span className="about_paragraph_span">Parks & Open Spaces.</span>
</p>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                
                                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="btn_style">
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
