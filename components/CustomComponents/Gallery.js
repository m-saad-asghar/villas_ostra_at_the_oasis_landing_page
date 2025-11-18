"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";

const images = [
  "/assets/img/gallery_section/gallery_1.png",
  "/assets/img/gallery_section/gallery_2.png",
  "/assets/img/gallery_section/gallery_3.png",
  "/assets/img/gallery_section/gallery_4.png",
  "/assets/img/gallery_section/gallery_5.png",
  "/assets/img/gallery_section/gallery_6.png",
  "/assets/img/gallery_section/gallery_7.png",
  "/assets/img/gallery_section/gallery_8.png",
  "/assets/img/gallery_section/gallery_9.png",
  "/assets/img/gallery_section/gallery_10.png",
  "/assets/img/gallery_section/gallery_11.png",
  "/assets/img/gallery_section/gallery_12.png",
  "/assets/img/gallery_section/gallery_13.png",
  "/assets/img/gallery_section/gallery_14.png",
  "/assets/img/gallery_section/gallery_15.png",
  "/assets/img/gallery_section/gallery_16.png",
  "/assets/img/gallery_section/gallery_17.png",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  const handleOpen = (startIndex) => {
    setIndex(startIndex);
    setOpen(true);
  };

  return (
    <>
     <section className="custom_container gallery_container_new" id="gallery">
        {/* Grid thumbnails */}
        <div className='banner_text_container'>

        <h1 className='heading_middle content_why_invest'>GALLERY</h1>
        </div>
      <div className="gallery-grid">
        {images.slice(0, 4).map((src, i) => (
          <button
            key={src}
            type="button"
            className="gallery-item"
            onClick={() => handleOpen(i)}
          >
           <Image
        src={src}
        alt={`Gallery image ${i + 1}`}
        width={400}
        height={220}
        className="gallery-image"
        loading="lazy"
      />
          </button>
        ))}
      </div>

      <div className="consultation_btn_style btn_cen custom_spacing_btn mid_btn">
  <button
            className="hover_external_btn"
            onClick={() => handleOpen(0)}
          >
            EXPLORE GALLERY
          </button>
</div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Thumbnails]}
        // keep track of current slide when user clicks arrows or thumbnails
        on={{
          view: ({ index: currentIndex }) => setIndex(currentIndex),
        }}
        thumbnails={{
          position: "bottom",
        }}
      />

      {/* Component-scoped styles */}
      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 20px
        }

        .gallery-item {
          position: relative;
          cursor: pointer;
          padding: 0;
          border: none;
          background: transparent;
          overflow: hidden;
          border-radius: 8px;
        }

        .gallery-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }

        /* Tablet – 2 per row */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile – 1 per row */
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
      </section>
    </>
  );
}
