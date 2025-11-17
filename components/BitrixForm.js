"use client";

import { useEffect } from "react";

export default function BitrixForm() {
  useEffect(() => {
    // Check if script is already loaded
    if (!document.getElementById("bitrix24-loader")) {
      const script = document.createElement("script");
      script.id = "bitrix24-loader";
      script.async = true;
      script.src =
        "https://crm.shiroestate.ae/upload/crm/form/loader_48_yf19a2.js?" +
        Math.floor(Date.now() / 180000);
      script.dataset.b24Form = "inline/48/yf19a2";
      script.dataset.skipMoving = "true";

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="bitrix24-form"
      data-b24-form="inline/48/yf19a2"
      data-skip-moving="true"
      style={{ minHeight: "500px" }}
    ></div>
  );
}
