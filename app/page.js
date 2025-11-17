import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Services from "@/components/sections/home1/Services"
import Projects from "@/components/sections/home1/Projects"
import Faq from "@/components/sections/home1/Faq"
import Team from "@/components/sections/home1/Team"
import Features from "@/components/sections/home1/Features"
import Features1 from "@/components/sections/home1/Features1"
import FeautureTwo from "@/components/sections/home1/FeautureTwo"
import News from "@/components/sections/home1/News"
import Video from "@/components/sections/home1/Video"
import Brand from "@/components/sections/home1/Brand"
import Testimonial from "@/components/sections/home1/Testimonial"
import TeamsListing from "@/components/teams/TeamsListing"
import Link from "next/link"
import Footer1 from "@/components/layout/footer/Footer1"
import ContactForm from "@/components/ContactForm"
import Future from "@/components/Future"
import WhyInvest from "@/components/CustomComponents/WhyInvest"
import Properties from "@/components/CustomComponents/Properties"
import Form from "@/components/CustomComponents/Form"
import Map from "@/components/Map"
// import Map from "@/components/CustomComponents/Map"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <WhyInvest/>
                <Properties/>
                <Map/>
                <Form/>
                 {/* <About />
                 <TeamsListing/>
                 <Future/>
                <Features />
                <Services />
                <Map/> */}
                <Footer1/>
            </Layout>
        </>
    )
}