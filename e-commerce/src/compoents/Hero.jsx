import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col  sm:flex-row border border-gray-600 h-[350px] w-full max-w-5xl  overflow-hidden">
        {/* Left section - Text */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="flex flex-col items-start text-[#414141] gap-2">
            {/* Top line and label */}
            <div className="flex items-center gap-2">
              <p className="font-medium text-sm md:text-base">
                ♡♡♡ OUR BEST SELLER
              </p>
            </div>

            {/* Main Heading */}
            <h1 className=" prata-regular text-3xl lg:text-5xl leading-tight">
              Latest Arrivals
            </h1>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">SHOP NOW ✧✧✧</p>
            </div>
          </div>
        </div>

        {/* Right section - Image */}
        <div className="w-full sm:w-1/2 h-[350px] flex justify-end items-center">
          <img
            className="h-full object-cover"
            src="/src/assets/hero_img.jpg"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
