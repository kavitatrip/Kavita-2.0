import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoPlayContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchYoutubeData();
  }, []);

  const fetchYoutubeData = async () => {
    const res = await fetch(YOUTUBE_API_URL);
    const data = await res.json();
    setVideoData(data.items);
    // console.log(data);
  };

  return (
    <div>
      <ul className="m-2 flex flex-wrap">
        {videoData.map((video) => (
        <Link to={`/watch?v=${video.id}`}><VideoCards key={video.id} info={video} /></Link>
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayContainer;
