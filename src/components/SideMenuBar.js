import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideMenuBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); // to get isMenuOpen state

  if (!isMenuOpen) return null; //early return

  return (
    <div className="p-5 shadow w-48">
      <ul>
       <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Playlists</li>
        <li>Your Videos</li>
      </ul>
      <h1 className="font-bold pt-2">Subscription</h1>
      <ul>
        <li>Subscription</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
      </ul>
      <h1 className="font-bold pt-2">Music</h1>
      <ul>
        <li>Subscription</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
      </ul>
      <h1 className="font-bold pt-2">Sports</h1>
      <ul>
        <li>Subscription</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
      </ul>
    </div>
  );
};

export default SideMenuBar;
