import React from "react";
import videojs from "video.js";

import AnnotationComments from "@contently/videojs-annotation-comments";
import { pluginOptions } from "./playerConfiguration/annotationsConfig";

import "video.js/dist/video-js.css";
import "@contently/videojs-annotation-comments/build/css/annotations.css";

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    videojs.registerPlugin("annotationComments", AnnotationComments(videojs));

    // instantiate Video.js

    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
    this.plugin = this.player.annotationComments(pluginOptions);
  }
  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div data-vjs-player>
        <video
          ref={(node) => (this.videoNode = node)}
          className="video-js"
        ></video>
      </div>
    );
  }
}
