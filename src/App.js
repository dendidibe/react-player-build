import React from "react";
import VideoPlayer from "./VideoPlayer";
import {videoPlayerConfig} from './playerConfiguration/videoPlayerConfig';

export const App = () => {
  return (
    <div>
      <VideoPlayer {...videoPlayerConfig} />
    </div>
  );
};
