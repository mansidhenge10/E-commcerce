import React from "react";

const NewSletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-900">
        Subscribe Now & get 20% Off
      </p>
      <p className=" text-gray-500 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
        iure?
      </p>
      <form className="w-full max-w-3xl mx-auto my-6 px-4">
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
  );
};

export default NewSletterBox;
