"use client";

import { useState, useEffect, useRef } from "react";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
   const router = useRouter();
  const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [phoneError, setPhoneError] = useState('');
    const [submitMessage, setSubmitMessage] = useState(null);
     const [isOpen, setOpen] = useState(false)
    const [keepUpdated, setKeepUpdated] = useState(true);
     const [disableBtn, setDisableBtn] = useState(false);
     const searchParams = useSearchParams();
     const [countryValue, setCountryValue] = useState('');
     const [countryCode, setCountryCode] = useState('ae');
  const [originValue, setOriginValue] = useState('');
  // reCAPTCHA (Component 1 specific)
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState('');

   useEffect(() => {
    const origin = searchParams.get('origin');
    const country = searchParams.get('country');

    if (origin) {
      if (origin.toLowerCase() === 'meta') {
        setOriginValue('Meta');
      } else if (origin.toLowerCase() === 'google') {
        setOriginValue('Google Ads');
      } else {
        setOriginValue('');
      }
    } else {
      setOriginValue('');
    }

    if (country) {
  const formattedCountry = country
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
  setCountryValue(formattedCountry);
  setCountryCode(formattedCountry)
} else {
      setCountryValue('');
      setCountryCode('ae');
    }
  }, [searchParams]);

   const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    if (token) {
      setCaptchaError('');
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

   // ✅ Check captcha FIRST
        if (!captchaToken) {
            setCaptchaError("Please verify that you are not a robot.");
            return;
        }

   if (!formData.phone) {
    setPhoneError("Phone number is required");
    return;
} else if (formData.phone.length < 9 || formData.phone.length > 15) {
  setPhoneError("Phone number must be between 9 and 15 characters");
  return;
}else{
  setPhoneError("");
}

 let phone = formData.phone.replace(/^(\d{1,3})0/, '$1');
 formData.phone = phone

  const payload_email = {
    LANDING_PAGE: "Villas Ostra at the Oasis EN Landing Page",
    ORIGIN: originValue,
    COUNTRY: countryValue,
    NAME: formData.name,
    PHONE_TEXT: formData.phone,
    EMAIL: formData.email,
    MESSAGE: formData.message,
  };

  const payload = {
    fields: {
      TITLE: `Villas Ostra at the Oasis EN Landing Page`,
      UF_CRM_1760777561731: originValue,
      NAME: formData.name,
      PHONE_TEXT: formData.phone,
      PHONE: [
        {
          VALUE: formData.phone,
          VALUE_TYPE: "WORK",
        },
      ],
      EMAIL: [
        {
          VALUE: formData.email,
          VALUE_TYPE: "WORK",
        },
      ],
      SOURCE_DESCRIPTION: formData.message,
      SOURCE_ID: "WEB",
      ASSIGNED_BY_ID: 25,
      UF_CRM_1754652292782: "Villas Ostra at the Oasis EN Landing Page",
      UF_CRM_1761206533: countryValue,
    },
    params: {
      REGISTER_SONET_EVENT: "Y",
    },
  };

  async function sendLeadEmail() {
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload_email),
    });

    const data = await res.json();
    console.log("Email sent:", data);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

  try {
    setDisableBtn(true);
    const response = await fetch(
      "https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
   setDisableBtn(false);

    if (result.result) {
      const country = searchParams.get("country");
      if (country) {
  router.push(`/thank-you?country=${country}`);
} else {
  router.push('/thank-you');
}

      // Reset this form's captcha only
                setCaptchaToken(null);
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }

                  setFormData({
           name: '',
        phone: '',
        email: '',
        message: '',
      });

      await sendLeadEmail();
    } else {
      setDisableBtn(false);
      console.log("Something Went Wrong. Please Try Again.")
    }
  } catch (error) {
    setDisableBtn(false);
    console.error("Error submitting lead:", error);
    console.log("Something Went Wrong. Please Try Again.")
  }
};

  return (
    <div className="mobile_margin">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
         <label className="form_label">
          Full Name*
          </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          style={{ borderRadius: "8px", border: "1px solid #ccc" }}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form_label">
          Email*
          </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          style={{ borderRadius: "8px", border: "1px solid #ccc" }}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form_label">
        Phone Number* (With Country Code)
        </label>
         <PhoneInput
         name="phone"
         country={
  countryCode == "British" 
    ? "gb" 
    : countryCode == "Saudi Arabia" 
      ? "sa" 
      : countryCode === "United Arab Emirates" 
        ? "ae" 
        : "ae"
}
         value={formData.phone}
        onChange={(value) =>
        setFormData({
        ...formData,
        phone: value,
      })
    }
    countryCodeEditable={false}
     required
   inputStyle={{
   width: "100%",
   borderRadius: "0",
   border: phoneError ? "1px solid red" : "1px solid #000",
   height: "60px",
   }}
   />
  <p className='error_msg' style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{phoneError}</p>
      </div>

      <div className="mb-3">
        <label className="form_label">
          Message
          </label>
        <textarea
          name="message"
          rows="3"
          placeholder="Your Message"
          className="form-control"
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          style={{
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "none",
          }}
        ></textarea>
      </div>

      <div className="mb-3">
{/* reCAPTCHA in the previously empty column */}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 captcha_container">
                          <div>
                            <ReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                              onChange={handleCaptchaChange}
                            />
                            {captchaError && (
                              <p
                                style={{
                                  color: 'red',
                                  fontSize: '14px',
                                  marginTop: '5px',
                                }}
                              >
                                {captchaError}
                              </p>
                            )}
                          </div>
                        </div>
      </div>

      <button
        type="submit"
        disabled={disableBtn}
        className="btn w-100 form_button"
        data-loading-text="Please wait..."
        style={{
          backgroundColor: "#9f8151",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "600",
        }}
      >
        Submit
      </button>
    </form>
    </div>
  );
}
