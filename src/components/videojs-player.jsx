import React, { useRef } from "react";
import VideoJS from "./videojs";
import abcdVideo from "../assets/videos/abcd.mp4";

const VideoJSPlayer = ({ isBlack }) => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: false, // CSS will control size
    autoplay: false,
    muted: true,
    playbackRates: [0.25, 0.5, 1, 1.5, 2],
    sources: [
      {
        src: abcdVideo,
        type: "video/mp4",
      },
    ],
    poster: "",
    tracks: [
      {
        kind: "chapters",
        src: "/chapters.vtt",
        srclang: "en",
        label: "Chapters",
        default: true,
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("Player is waiting");
    });

    player.on("loadedmetadata", () => {
      console.log("Video metadata loaded");
    });

    player.on("dispose", () => {
      console.log("Player will dispose");
    });
  };

  return (
    <>
      {/* Inject styles so video covers full screen */}
      <style>{`
        .video-js {
          width: 100vw !important;
          height: 100vh !important;
        }

        .video-js video {
          object-fit: contain;  /* or cover for reels-style */
          background-color: black;
          width: 100%;
          height: 100%;
        }

        /* Responsive title */
        .video-title {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .video-title {
            font-size: 18px;
            margin-bottom: 5px;
          }
        }

        @media (max-width: 480px) {
          .video-title {
            font-size: 16px;
            margin-bottom: 5px;
          }
        }
      `}</style>

      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // centers vertically
          alignItems: "center", // centers horizontally
        }}
      >
        <h2 
          className="video-title"
          style={{ 
            color: isBlack ? "#fff" : "#000", 
            marginBottom: "0px",
            fontSize: "24px",
            fontWeight: "bold"
          }}
        >
          Video player using VideoJS
        </h2>

        {/* Full width container (removed maxWidth restriction) */}
        <div style={{ width: "100vw", height: "100vh" }}>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </>
  );
};

export default VideoJSPlayer;
