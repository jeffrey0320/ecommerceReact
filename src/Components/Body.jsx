import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import sneakerImg from "../images/image-product-1.jpg";
import sneakerImg2 from "../images/image-product-2.jpg";
import sneakerImg3 from "../images/image-product-3.jpg";
import sneakerImg4 from "../images/image-product-4.jpg";
import { useState } from "react";

const Body = () => {
  const IMAGES = [sneakerImg, sneakerImg2, sneakerImg3, sneakerImg4];
  const [arrIndex, setArrIndex] = useState(0);

  function handlePrevious() {
    const isFirstSlide = arrIndex === 0;
    const newIndex = isFirstSlide ? IMAGES.length - 1 : arrIndex - 1;
    setArrIndex(newIndex);
  }
  function handleNext() {
    const isLastSlide = arrIndex === IMAGES.length - 1;
    const newIndex = isLastSlide ? 0 : arrIndex + 1;
    setArrIndex(newIndex);
  }
  return (
    <div className="body">
      <div className="imgButtons">
        <button onClick={handlePrevious}>
          <img src={leftArrow} onClick={handlePrevious} />
        </button>
        <button onClick={handleNext}>
          <img src={rightArrow} onClick={handleNext} />
        </button>
      </div>
      <img className="itemImg" src={IMAGES[arrIndex]} />
      <div className="imagesUnderDiv">
        {IMAGES.map((data, i) => (
          <img
            className={i === arrIndex ? "imagesUnderActive" : "imagesUnder"}
            src={IMAGES[i]}
            onClick={() => setArrIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
