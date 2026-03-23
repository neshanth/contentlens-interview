import { useState } from "react";
import VideoPlayer from "../videoPlayer/videoPlayer";

const Video = ({ handleSummary }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedVideo(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <p>1. Upload your review video</p>
      <p className="muted-text">Supported Formats : MP4,MOV,WEBM,AVI,M4V</p>
      <input
        type="file"
        accept="video/*"
        className="hidden"
        id="videoUpload"
        onChange={handleVideoUpload}
      />
      <label htmlFor="videoUpload" className="btn-primary">
        Choose File
      </label>
      <div>
        <button
          onClick={handleSummary}
          disabled={!selectedVideo}
          className="btn-primary w-full"
        >
          Analyze Review
        </button>
      </div>
      <div className="divider"></div>
      <p>2.Preview Uploaded Video</p>
      <div className="video-placeholder">
        {selectedVideo && <VideoPlayer selectedVideo={selectedVideo} />}
      </div>
    </div>
  );
};

export default Video;
