import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/slices";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleHandleMenu = () => {
      dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-2xs">
      <div className="flex justify-start">
        <img
          onClick={() => toggleHandleMenu()}
          src="https://icon-library.com/images/android-menu-icon/android-menu-icon-20.jpg"
          alt="menu"
          className="w-18 cursor-pointer"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="youtubelogo"
          className="w-24"
        />
      </div>
      <div className="flex col-span-10 px-10 p-4">
        <input className="w-1/2 h-10 border p-2 rounded-l-full" placeholder="Search"></input>
        <button className="border rounded-r-full h-10 px-5 py-2 bg-gray-200 cursor-pointer">🔍</button>
      </div>
      <div className="flex justify-end">
        <img
          src="https://img.freepik.com/premium-vector/user-icon-set-social-profile-avatar-vector-symbol-person-account-web-sign_268104-22738.jpg?w=1380"
          alt="usericon"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
