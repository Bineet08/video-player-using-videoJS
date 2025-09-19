import React from "react";

const BasicVideoPlayer = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h2>Basic HTML5 Video Player</h2>

      <video
        src=""
        width="800"
        height="450"
        controls
        poster=""
      >
        {/* <track
          kind="subtitles"
          src="/english.vtt"
          srcLang="en"
          label="English"
          default
        />

        <track kind="subtitles" src="/hindi.vtt" srcLang="hi" label="हिंदी" /> */}
      </video>
    </div>
  );
};

export default BasicVideoPlayer;