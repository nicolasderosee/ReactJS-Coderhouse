import "../styles/VideoOverlay.css";
const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video-content">
        <source src="https://cdn.shopify.com/videos/c/o/v/c3564bb9acd040f4a558b9512fc8c833.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;