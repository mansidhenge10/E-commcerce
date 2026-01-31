import React from "react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src="/src/assets/exchange-icon.webp "
          className=" w-12 m-auto mb-5 hover:scale-110 transition ease-in-out"
          alt=""
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-500">We Offer hassle Free exchange Policy </p>
      </div>
      <div>
        <img
          src="/src/assets/quailty_icon.jpg"
          className=" w-12 m-auto mb-5 hover:scale-110 transition ease-in-out"
          alt=""
        />
        <p className="font-semibold">7 Days return policy</p>
        <p className="text-gray-500">
          We Provide best quality and return policy Policy
        </p>
      </div>
      <div>
        <img
          src="/src/assets/support_icon.webp"
          className=" w-12 m-auto mb-5 hover:scale-110 transition ease-in-out"
          alt=""
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-500">We Provide 24/7 Customer </p>
      </div>
    </div>
  );
};

export default OurPolicy;
