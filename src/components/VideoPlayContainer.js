import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoPlayContainer = ({startLive}) => {
  const [videoData, setVideoData] = useState([]);
  const selectedVideo = useSelector((store) => store.videoSelected.video);
  console.log(selectedVideo, 'Selected video');

  useEffect(() => {
    fetchYoutubeData();
  }, []);

  const fetchYoutubeData = async () => {
    const res = await fetch(YOUTUBE_API_URL);
    const data = await res.json();
    setVideoData(data.items);
  };

  return (
    <div>
      <ul className="m-2 flex flex-wrap">
        {selectedVideo.length > 0 && (
          <Link to={`/watch?v=${selectedVideo.id}`}><VideoCards key={selectedVideo.id} info={selectedVideo} /></Link>
        )}
        {videoData.map((video) => (
        <Link  key={video.id} to={`/watch?v=${video.id}`}><VideoCards info={video} /></Link>
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayContainer;
