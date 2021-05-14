import ReactGoogleSlides from "react-google-slides";

const Slides = () => {
  return (
    <div style={{ padding: "30px" }}>
      <ReactGoogleSlides
        width={640}
        height={480}
        slidesLink="https://docs.google.com/presentation/d/1_tS0cm-9XfwXlTQSHpkXI77TnfsVNafgIc_B7fMLEZM/edit?usp=sharingM"
        slideDuration={5}
        showControls
        loop
      />
    </div>
  );
};

export default Slides;
