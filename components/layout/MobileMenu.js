'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>           
            {/*Mobile Menu */}
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                    <div className="nav-logo">
                        <Link href="/"><img src="assets/img/shiro_images/logo.png" alt="Logo"/></Link>
                    </div>
                    {/* <div className="menu-outer">
                        <ul className="navigation clearfix">
                            <li className="active menu-item-has-children"> <Link href="#home" onClick={handleMobileMenu}>Home</Link>
                            </li>
                            <li><Link href="#about-us">About</Link></li>
                            <li><Link href="#around-the-corner">Around the Corner</Link></li>
                             <li><Link href="#ameneties">Ameneties</Link></li>
                             <li><Link href="#gallery">Gallery</Link></li>
                             <li><Link href="#contact">Contact Us</Link></li>
                        </ul>
                    </div> */}
                    <div className="contact-info">
                        <div className="icon-box"><span className="icon-call"></span>
                        </div>
                        <p><Link href="tel:97145776496">+971 (0)4 577 6496</Link></p>
                    </div>
                    {/* <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li><Link href="https://www.facebook.com/shiroestate"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="https://x.com/shiroestate"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="https://www.instagram.com/shiro.estate"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link href="https://www.linkedin.com/company/shiro-estate"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="https://www.snapchat.com/@shiro.estate"><i className="fab fa-snapchat"></i></Link></li>
                            <li><Link href="https://www.tiktok.com/@shiroestate"><i className="fab fa-tiktok"></i></Link></li>
                        </ul>
                    </div> */}
                </nav>
            </div>
            <div className="menu-backdrop" onClick={handleMobileMenu}></div>
            {/*End Mobile Menu */}
            {/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}
