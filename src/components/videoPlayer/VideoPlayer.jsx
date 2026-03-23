const VideoPlayer = ({ selectedVideo }) => {
  return (
    <video className="video-player" controls>
      <source src={selectedVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default VideoPlayer;
