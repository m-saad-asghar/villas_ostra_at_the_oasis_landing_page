"use client";
import Link from "next/link"
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaHouseUser, FaChartLine, FaCity, FaGolfBall, FaTree, FaStore, FaBiking, FaTruckMonster, FaHotel, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaStar } from "react-icons/fa6";
import { Home, Building, Trees, Umbrella, UmbrellaIcon, TreePine, Activity, Dumbbell, Sailboat, MapPin, Leaf, TrendingUp } from "lucide-react";
import ContactForm from "../ContactForm";
export default function Form() {
    return (
        <>
            <section className="custom_container properties_section" id="contact-form">
              <div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content_why_invest'>Find Your Dream Home Today</h1>
        </div>
      </div>
      <div className=''>
        <p className="down_styling para_styling">
 Invest in Palace Villas Ostra at the Oasis with Shiro Estate and unlock exclusive projects and exceptional investment opportunities. Secure your preferred residence now.
</p>

      </div>

      <div className="row apartment_row_styling margin_left_null">
        <div className="why_invest_wrapper_form mobile_form_container col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="form_container">
                <ContactForm/>
              </div>
            </div>
            <div className="why_invest_wrapper_form col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mobile_dissapear">
               <div className="apartment_container apartment_container">
  <Image
     src="/assets/img/footer_image.jpg"
    alt="Contact Image"
    width={1200}
    height={800}
    className="apartment_image_styling"
  />
</div>
            </div>
      </div>

     
            </section>
        </>
    )
}