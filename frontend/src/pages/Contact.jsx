import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaPinterest,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        {/* Form */}
        <form className="bg-[#FFF5E5] p-8 rounded-lg shadow-md space-y-6 mb-16">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              rows="5"
              placeholder="Tell us what’s on your mind..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-gray-700 flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-black" />
              Visit Us
            </h3>
            <p>Swagberry HQ</p>
            <p>123 Style Street, Mumbai, MH 400001</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-black" />
              Call or Email
            </h3>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-600" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-gray-600" /> hello@swagberry.in
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Follow Us
            </h3>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="w-6 h-6 text-gray-700 hover:text-black transition" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <FaPinterest className="w-6 h-6 text-gray-700 hover:text-black transition" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="w-6 h-6 text-gray-700 hover:text-black transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center mb-2">
          <p className="text-2xl font-medium text-gray-900">
            Subscribe Now & get 20% Off
          </p>
          <p className="text-gray-500 mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            iure?
          </p>

          <form className="w-full max-w-3xl mx-auto mt-6 px-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 border border-gray-300 p-4 rounded">
              <input
                type="email"
                required
                placeholder="Enter your Email"
                className="w-full sm:flex-1 px-4 py-2 outline-none border border-gray-200 rounded"
              />
              <button
                type="submit"
                className="bg-black text-white text-sm px-6 py-2 rounded w-full sm:w-auto sm:self-end"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
