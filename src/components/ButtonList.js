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
  ];

  return (
    <div className="flex p-1 m-2">
      {list.map((names) => (
        <li className="list-none">
          <Button className="px-2 m-1 bg-gray-100 rounded-sm" name={names} />
        </li>
      ))}
    </div>
  );
};

export default ButtonList;
