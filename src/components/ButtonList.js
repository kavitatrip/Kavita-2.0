import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "JavaScript",
    "TypeScript",
    "Movies",
    "Comedy",
    "Cooking",
    "Books",
    "Doodling",
    "Design"
  ];

  return (
    <div className="flex p-1 m-2">
      {list.map((names, index) => (
        <li className="list-none" key={index}>
          <Button className="px-2 m-1 bg-gray-100 rounded-sm" name={names} />
        </li>
      ))}
    </div>
  );
};

export default ButtonList;
