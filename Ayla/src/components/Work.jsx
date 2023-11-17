import React from "react";
import WorkItem from "./Workitem";

const data = [
  {
    year: 2023,
    title: "Web Development",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate magnam molestias ipsam ipsum? Eaque impedit eum ex voluptate eligendi excepturi fugit, omnis animi, consectetur reprehenderit recusandae deserunt id voluptatibus!",
  },
  {
    year: 2020,
    title: "Google",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate magnam molestias ipsam ipsum? Eaque impedit eum ex voluptate eligendi excepturi fugit, omnis animi, consectetur reprehenderit recusandae deserunt id voluptatibus!",
  },
  {
    year: 2018,
    title: "Apple",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate magnam molestias ipsam ipsum? Eaque impedit eum ex voluptate eligendi excepturi fugit, omnis animi, consectetur reprehenderit recusandae deserunt id voluptatibus!",
  },
  {
    year: 2015,
    title: "Nasa",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate magnam molestias ipsam ipsum? Eaque impedit eum ex voluptate eligendi excepturi fugit, omnis animi, consectetur reprehenderit recusandae deserunt id voluptatibus!",
  },
];
const work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};
export default work;
