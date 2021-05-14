import ReactPlayer from "react-player";

const Player = () => {
  return (
    <div>
      <ReactPlayer
        url="https://storage.coverr.co/videos/BALBxhjqfldnwtv00YopEAA014UtVoZo00R?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMjc0NTQwfQ.rVZT49viuSpaSaXUkejPw3N9cvSHbxmSwhrnDUKJCMc"
        controls
        width="90%"
        height="90%"
      />
    </div>
  );
};

export default Player;
