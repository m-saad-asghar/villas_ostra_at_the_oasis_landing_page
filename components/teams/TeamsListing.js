"use client";

import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";

// Lightbox core + plugins
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function TeamsListing() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
  {
    id: 1,
    src: "/assets/img/gallery/creek_main.jpg",
    alt: "Gallery Image 1",
    link: "#home",
    // heading: "Townhouses Starting from AED 3.2M",
    // location: "EMAAR SOUTH"
  },
  {
    id: 2,
    src: "/assets/img/gallery/creek_2.jpg",
    alt: "Gallery Image 2",
    link: "#home",
    //  heading: "Townhouses Starting from AED 2.9M",
    //  location: "THE VALLEY"
  },
  {
    id: 3,
    src: "/assets/img/gallery/creek_3.jpg",
    alt: "Gallery Image 3",
    link: "#home",
  },
];


  return (
    <Layout>
      <section className="team-two cont" id="gallery">
        <div className="container gallery_container_styling component_container">
          {/* <div className="sec-title gallery_container">
            <h2 className="gallery_styling">FEATURED EMAAR PROPERTIES</h2>
          </div> */}

          {/* Normal grid view (unchanged) */}
          <div className="row team_listing_styling">
        {images.map((image) => (
  <div key={image.id} className="col-xl-4 col-lg-4">
    <div className="team-two__single">
      <div className="team-two__single-img">
        <div
          className="inner"
          style={{
            overflow: "hidden",
            position: "relative",
            transition: "all 0.3s ease",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "200px" }}>
  <Image
    src={image.src}
    alt={image.alt}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    style={{ objectFit: "cover", display: "block" }}
    priority
  />
</div>

          {/* Overlay for heading & location */}
          <div
            style={{
              position: "absolute",
              bottom: "15px",
              left: "15px",
              color: "#fff",
              zIndex: 2,
              textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
            }}
          >
            <p className="heading_container_styling">
              {image.heading}
            </p>
            <p
              className="location_container_styling"
            >
              {/* <span><FaMapMarkerAlt className="icon-plane" size={25}/> </span> {image.location} */}
            </p>
          </div>

          {/* Hover overlay */}
          <div
            className="hover-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0)",
              transition: "background-color 0.3s ease",
              zIndex: 1,
            }}
          ></div>

          <button
            className="hover-btn"
            style={{ zIndex: 3, position: "absolute" }}
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            REGISTER INTEREST
          </button>
        </div>
      </div>
    </div>
  </div>
))}

{/* <div className="btn_style">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("home");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            REGISTER INTEREST
          </button>
</div> */}


          </div>
        </div>

        {/* Popup Lightbox Gallery */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          plugins={[Thumbnails, Captions]}
          slides={images.map((src, i) => ({
            src,
            description: `Image ${i + 1}`,
          }))}
          render={{
            buttonClose: () => (
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            ),
          }}
          styles={{
            container: { backgroundColor: "rgba(0,0,0,0.9)" },
            thumbnailsContainer: { backgroundColor: "transparent" },
            thumbnail: { borderRadius: "8px" },
          }}
        />


       {/* <div className="about-one__content-bottom">
                                    <div className="about-one__content-bottom-author-box" style={{display: "flex", justifyContent: "center"}}>
                                        <div className="btn-box" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                            <Link className="thm-btn" href="#home" style={{width: 300, display: "flex", justifyContent: "center"}}>
                                                <span className="txt" style={{fontSize: 18}}>Contact Us</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}

      </section>
    </Layout>
  );
}
