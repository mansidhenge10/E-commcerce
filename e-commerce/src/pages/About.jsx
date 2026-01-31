import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/aboutimg.jpg"; // ✅ Make sure this path is correct

const About = () => {
  return (
<div className="text-gray-800 font-sans">
{/* 🔥 Hero Section */}
<section className="w-full bg-[#FFF5E5]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch">
    
    {/* Left - Image (Hard Left aligned) */}
    <div className="w-full md:w-1/2 h-[400px] flex justify-start md:pl-0 pl-4">
      <img
        src={aboutImage}
        alt="About"
        className="h-full object-contain"
      />
    </div>

    {/* Right - Text */}
    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6 md:px-10 bg-[#FFF5E5] h-[400px]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
        Your Style, Your Story
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover what makes us more than just a fashion store. At{" "}
        <span className="font-semibold text-black">Urban Vogue</span>, we bring confidence, creativity,
        and self-expression through handpicked fashion that fits your lifestyle.
      </p>
   <div className="flex justify-center md:justify-start">
  <a
    href="/collection"
    className="bg-black text-white text-center font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition"
  >
    Start Exploring
  </a>
</div>

    </div>

  </div>
</section>



      {/* 🌟 Story Section */}
      <section className="max-w-6xl mx-auto py-14 px-6">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          At <span className="font-semibold text-black">Urban Vogue</span>, we’re not just about clothes — 
          we’re about confidence, creativity, and self-expression. Whether it's a brunch with friends, a business meeting, 
          or a cozy weekend, our curated styles help you look your best without trying too hard.
        </p>
      </section>

      {/* 💎 Feature Cards */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Curated Collections", desc: "Every item is handpicked to reflect modern elegance and comfort." },
            { title: "Inclusive Fashion", desc: "Styles for Men, Women, Boys, and Girls of all sizes and walks of life." },
            { title: "Eco-Conscious", desc: "We care about the planet, and our sustainable fabric choices prove that." }
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ❤️ Mission Section */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We’re here to redefine the online shopping experience. With over <span className="font-semibold">200+ products</span> 
          updated monthly, we want our customers to feel bold, empowered, and unstoppable — all while keeping comfort and quality first.
        </p>
      </section>

      {/* 📦 Call to Action */}
      <div className="text-center mb-16">
        <Link
          to="/our-story"
          className="inline-block bg-black text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 transition"
        >
          Our Story
        </Link>
      </div>
    </div>
  );
};

export default About;
