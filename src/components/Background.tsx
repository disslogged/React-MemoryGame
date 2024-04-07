import bg from "../assets/bg.mp4";

const Background = () => {
  return (
    <video
      muted
      loop
      autoPlay
      className="absolute min-w-full min-h-full object-cover -z-20"
    >
      <source src={bg} type="video/mp4" />
    </video>
  );
};

export default Background;
