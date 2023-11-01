import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-96">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-gray-700 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">
            Start the journey with KIT! A library of resources for learn. We are
            here for you -
          </h2>
          <form
            action=""
            className="border-2 flex bg-gray-500 rounded-lg overflow-hidden"
          >
            <input
              type="text"
              id="subscribe"
              className="w-full h-full outline-none text-lg px-5"
              placeholder="enter your email address..."
            />
            <label
              htmlFor="subscribe"
              className="text-lg text-white font-normal px-5 py-4"
            >
              Subscribe
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
