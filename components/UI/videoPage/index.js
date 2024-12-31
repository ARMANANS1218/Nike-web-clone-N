import React from "react";

const VideoPage = () => {
  return (
    <>
      <h2 className="text-[25px] md:text-[40px] my-10">Just In</h2>

      <video src="/video/nike.mp4" autoPlay loop muted className="my-4"></video>
    </>
  );
};

export default VideoPage;
