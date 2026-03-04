import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faPinterest,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 md:px-20 mt-40 text-base text-gray-700">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        {/* Logo + Description */}
        <div>
          <img className="mb-5 w-20" src="/src/assets/logo.png" alt="Logo" />
          <p>
            Elevate your style with SwagBreezy — where fashion meets comfort..
           
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-xl font-semibold mb-4">COMPANY</h3>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">SUPPORT</h3>
          <ul className="flex flex-col gap-2">
            <li>Contact</li>
            <li>Help Center</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="text-xl font-semibold mb-4">GET IN TOUCH</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              swagbreey@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              +91 9876543210
            </li>
            <li className="flex gap-4 mt-2 text-lg">
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" />
              <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
              <FontAwesomeIcon icon={faPinterest} className="cursor-pointer" />
              <FontAwesomeIcon icon={faWhatsapp} className="cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SwagBerry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
