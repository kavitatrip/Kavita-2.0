import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slices";
import { SEARCH_API_URL } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
import VideoCards from "./VideoCards";
import { playSelectedVideo } from "../utils/videoPlaySlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const toggleHandleMenu = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timerforDebouncing = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setResults(searchCache[searchQuery]);
        /**
         * searchCache[searchQuery] here is an Object and it's key which matches the searchquery we will enter
         * in the input field, if it matches then we directly set the results otherwise api call
         * will happen
         */
      } else {
        fetchSearchResults();
      }
    }, 200);

    return () => clearInterval(timerforDebouncing);
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    console.log("searching results");
    const data = await fetch(SEARCH_API_URL + searchQuery);
    const json = await data.json();
    // console.log(json);
    setResults(json[1]);

    //update in the cache by dispatching an action after api call
    dispatch(
      cachedResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSelect = (video) => {
    dispatch(playSelectedVideo(video));
    setSearchQuery('');
    setShowResults(false);
    console.log(video, 'handle select');
  }

  return (
    <div className="grid grid-flow-col shadow-2xs mt-3 mb-2">
      <div className="flex col-span-1">
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
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border-gray-300 border px-2 py-2 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
          />
          <button className="border border-gray-200 px-5 py-2 rounded-r-full cursor-pointer">
            🔍
          </button>
        </div>
        {showResults && (
          <div className="absolute bg-white w-1/3 px-5 py-2">
            {searchQuery
              ? results.map((items) => (
                  <li
                    className="list-none hover:bg-gray-300 cursor-pointer"
                    onClick={() => handleSelect(items)}
                  >
                    {items}
                  </li>
                ))
              : null}
          </div>
        )}
      </div>
      <div className="flex justify-end mr-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="usericon"
          className="w-9 h-9 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
