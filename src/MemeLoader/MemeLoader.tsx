import { useState, FC } from "react";
import "./MemeLoader.css";
import { MemeLoaderProps } from "./MemeLoader.types";
import { memes } from "../memes";

const SmartRating: FC<MemeLoaderProps> = ({
  meme = "racoon",
  title,
  description,
  muted = true,
  memeLoaderClassName = "",
  videoClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  memeLoaderStyle,
  videoStyle,
  titleStyle,
  descriptionStyle,
}) => {
  const memeObject = memes[meme];
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <div className="preloader">
      <div className="preloader__logo">
        <div
          className={`${
            isVideoLoaded ? "preloader__meme" : ""
          } ${memeLoaderClassName}`}
          style={memeLoaderStyle}
        >
          {memeObject.type === "video" && (
            <video
              className={`preloader__video ${videoClassName}`}
              style={videoStyle}
              loop
              autoPlay
              playsInline
              muted={muted}
              src={memeObject.src}
              onCanPlayThrough={() => setIsVideoLoaded(true)}
            />
          )}
        </div>
      </div>
      <div className={`preloader__title ${titleClassName}`} style={titleStyle}>
        {title}
      </div>
      <div
        className={`preloader__description ${descriptionClassName}`}
        style={descriptionStyle}
      >
        {description}
      </div>
    </div>
  );
};

export default SmartRating;
