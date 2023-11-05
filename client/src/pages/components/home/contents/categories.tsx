import React from "react";
import { BsCheck2Circle, BsQuestionCircleFill } from "react-icons/bs";

const information = [
  "Computer Science",
  "Life Hacks",
  "Planning",
  "Innovation",
  "Science Fiction",
  "History",
  "Self-Improvement",
  "Art and Creativity",
  "Health and Wellness",
  "Business and Entrepreneurship",
  "& Many More",
];

const Categories: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="flex items-center gap-5 text-3xl font-bold text-gray-700">
          What you can share about ?
          <span className="text-5xl ">
            <BsQuestionCircleFill />
          </span>
        </h2>
      </div>
      <div className="flex gap-5 my-20 flex-wrap justify-center">
        {information.map((info, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden p-5 text-gray-700 flex items-center"
          >
            <div className="flex gap-2">
              <p className="text-xl w-fit mt-0.5">
                <BsCheck2Circle />
              </p>
              <h2 className="font-semibold">{info}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
