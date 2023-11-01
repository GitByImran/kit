import { MdGroups2 } from "react-icons/md";

import React from "react";

const WhyKit = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="flex items-center gap-5 text-3xl font-bold text-gray-700">
          Why to KIT ?
        </h2>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-3 my-20 text-gray-700">
        <p className="text-7xl">
          <MdGroups2 />
        </p>
        <p className="text-lg text-center">
          KIT is trying to build a community - platform where you can share your
          important text, notes, codes etc. and get feedback from kit community.
        </p>
        <p>" We belive sharing can take to the right track. "</p>
      </div>
    </div>
  );
};

export default WhyKit;
