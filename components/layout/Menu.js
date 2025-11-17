import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
                                    <ul className="navigation">
                                        <li className="active menu-item-has-children"><Link href="#home">Home</Link>
                                        </li>
                                        <li><Link href="#about-us">About Us</Link></li>
                                         <li><Link href="#around-the-corner">Around The Corner</Link></li>
                                         <li><Link href="#amenities">Amenities</Link></li>
                                         <li><Link href="#gallery">Gallery</Link></li>
                                        <li><Link href="#contact">Contact Us</Link></li>
                                    </ul>
        </>
    )
}
