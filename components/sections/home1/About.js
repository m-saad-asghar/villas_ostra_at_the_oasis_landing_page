"use client";
import Link from "next/link"
import Image from "next/image";
export default function About() {
    return (
        <>
            <section className="about-one about_spacing" id="welcome-to-dubai-creek-harbour">
                {/* <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div> */}
                <div className="container banner_container_main_except component_container">
                    <div className="row">

                           <div className="col-xl-12 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div>
                                    <p className="small_heading">
                                        <span>ELEVATE YOUR LIFESTYLE</span>
                                    </p>
                                </div>
                                <div className="sec-title">
                                    <h2 className="welcome_emaar_styling"><span className="welcome_emaar_styling_span">WELCOME TO DUBAI CREEK HARBOUR</span></h2>
                                </div>

                                {/* <div className="text-box">
                                    <h3 className="about_subheading">"Our goal is to build sustainable, livable, and dynamic urban spaces for generations to come."</h3>
                                </div> */}

                                <div className="text-box">
<p className="about_paragraph">
    <span className="about_paragraph_span">Home to iconic landmarks like Dubai Creek Marina and the Ras Al Khor Wildlife Sanctuary, Dubai Creek Harbour blends urban sophistication with natural beauty. Stroll along peaceful lagoons, enjoy waterfront dining, and take in panoramic skyline views.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">Perfectly connected to Downtown Dubai, Dubai International Airport, and the upcoming Metro expansion, it offers unmatched convenience and lifestyle.</span>
</p><br/>

<p className="about_paragraph">
    <span className="about_paragraph_span">Discover elegant apartments, penthouses, and hotels including Vida Creek Harbour, Address Harbour Point, and Palace Residences — all offering world-class amenities, retail, and leisure experiences in one vibrant waterfront destination.</span>
</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="about-one__img about_i">
                                <div className="inner">
                                    <Image
  src="/assets/img/about/about_us.jpg"
  alt="About Us"
  width={600} 
  height={350}
  style={{objectFit: "cover"}}
/>

                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
                
            </section>
        </>
    )
}
