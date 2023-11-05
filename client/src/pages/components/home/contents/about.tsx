import { BsCheck2Circle } from "react-icons/bs";
import { BsQuestionCircleFill } from "react-icons/bs";
import React from "react";

const information = [
  {
    label: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, omnis. Porro repellendus temporibus ea ex repellat alias quibusdam, nostrum explicabo.",
  },
  {
    label: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, omnis. Porro repellendus temporibus ea ex repellat alias quibusdam, nostrum explicabo.",
  },
  {
    label: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, omnis. Porro repellendus temporibus ea ex repellat alias quibusdam, nostrum explicabo.",
  },
  {
    label: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, omnis. Porro repellendus temporibus ea ex repellat alias quibusdam, nostrum explicabo.",
  },
  {
    label: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, omnis. Porro repellendus temporibus ea ex repellat alias quibusdam, nostrum explicabo.",
  },
  {
    label: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, omnis. Porro repellendus temporibus ea ex repellat alias quibusdam, nostrum explicabo.",
  },
];

const About: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="flex items-center gap-5 text-3xl font-bold text-gray-700">
          What is in KIT
          <span className="text-5xl">
            <BsQuestionCircleFill />
          </span>
        </h2>
      </div>
      <div className="my-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {information.map((info, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden p-5 text-gray-700"
            >
              <div className="flex flex-col gap-2">
                <p className="text-3xl w-fit">
                  <BsCheck2Circle />
                </p>
                <h2 className="text-xl font-semibold">{info.label}</h2>
                <p className="">{info.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
