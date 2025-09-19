import React from "react";
import { Video, ImageKitProvider } from "@imagekit/react";

const ImageKitBasicPlayer = () => {
  return (
    <ImageKitProvider urlEndpoint="">
      <div style={{ margin: "20px 0" }}>
        <h2>ImageKit Basic Video Player</h2>

        <Video
          src=""
          controls
          width={800}
          height={450}
          transformation={[{ quality: 80 }, { format: "auto" }]}
          poster=""
        />
      </div>
    </ImageKitProvider>
  );
};

export default ImageKitBasicPlayer;