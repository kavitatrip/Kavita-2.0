import React from "react";

const VideoCards = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const {channelTitle, thumbnails, title} = snippet;

  return (
    <div className="m-2 p-2 w-72 shadow-xl rounded-lg">
      <img className="h-auto rounded-lg" alt="thumnail"src={thumbnails.medium.url}/>
      <li className="font-bold">{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} views</li>
    </div>
  );
};

export default VideoCards;
