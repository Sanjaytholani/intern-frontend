import ReactPlayer from "react-player";

const Player = () => {
  return (
    <div className="ml-0.5">
      <ReactPlayer
        url="https://static.videezy.com/system/resources/previews/000/044/434/original/math-alpha-channel.mp4"
        controls
        width="90%"
        height="90%"
      />
    </div>
  );
};

export default Player;
