"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/WhatsappButton.module.css";

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

//   const saveLog = async () => {
//     try {
//       await fetch('https://api.raalc.ae/api/save_log', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message: 'WhatsApp button clicked from Commercial Landing Page',
//           origin: "Commercial",
//           type: "Whatsapp",
//           source: "Web",
//           page_url: window.location.href
//         }),
//       });
//       console.log('Log sent!');
//     } catch (error) {
//       console.error('Log failed:', error);
//     }
//   };

  // const sendLogToZapier = async () => {
  //   try {
  //     await fetch("/api/zapier-log", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         message: "WhatsApp button clicked from Commercial Landing Page",
  //         origin: "Commercial",
  //         type: "Whatsapp",
  //         source: "Web",
  //         timestamp: new Date().toISOString(),
  //         page_url: window.location.href,
  //       }),
  //     });
  
  //     console.log("Log sent to Zapier!");
  //   } catch (err) {
  //     console.error("Zapier log failed:", err);
  //   }
  // };

  useEffect(() => {
    // const hasSeenMessage = sessionStorage.getItem("whatsappGreeting");

    // if (!hasSeenMessage) {
    //   setShowMessage(true);
    //   sessionStorage.setItem("whatsappGreeting", "true");
    // }
  }, []);

  return (
    <div className={styles.whatsappContainer}>
      {/* {showMessage && (
        <div className={styles.greetingMessage}>
          👋 Hi there! Need help? Chat with us on WhatsApp.
          <button onClick={() => setShowMessage(false)}>✖</button>
        </div>
      )} */}

<div
      style={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >

{showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "110%",
            backgroundColor: "#25d366",
            color: "#ffffff",
            padding: "8px 12px",
            borderRadius: "6px",
            whiteSpace: "nowrap",
            zIndex: 9999,
            fontSize: "14px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
         Contact Us on WhatsApp for Property Inquiries!
        </div>
      )}

      <Link
        href="https://wa.me/97145693370?text=Hello%2C%20I%E2%80%99m%20interested%20in%20properties%20at%20Dubai%20Creek%20Harbour.%20Could%20you%20please%20share%20more%20details%20on%20available%20listings%20and%20investment%20options%3F&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp_button}
        // onClick={() => {
        //   saveLog();
        // }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          srcset="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
          priority
          width={100}
          height={100}
          className={styles.whatsapp_icon}
        />
      </Link>
      </div>
    </div>
  );
};

export default WhatsAppButton;