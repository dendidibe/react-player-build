export const videoPlayerConfig = {
  autoplay: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  sources: [
    {
      src: "src/assets/videoplayback.mp4",
      type: "video/mp4",
    },
  ],
};
