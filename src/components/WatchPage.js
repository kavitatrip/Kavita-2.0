import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapseMenu } from "../utils/slices";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const videoId = params.get("v");
  console.log(videoId);

  useEffect(() => {
    dispatch(collapseMenu());
  });
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
