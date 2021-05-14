import ReactGoogleSlides from "react-google-slides";

const Slides = () => {
  return (
    <div style={{ padding: "30px" }}>
      <ReactGoogleSlides
        width={640}
        height={480}
        slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
        slideDuration={5}
        showControls
        loop
      />
    </div>
  );
};

export default Slides;
