import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { FadeInContainer } from "../../atoms/FadeInContainer";

const images: string[] = [
  "/images/spoon/spoon_1.jpg",
  "/images/spoon/spoon_2.jpg",
  "/images/spoon/spoon_3.JPG",
  "/images/spoon/spoon_4.jpg",
  "/images/spoon/spoon_5.jpg",
  "/images/spoon/spoon_6.jpg",
  "/images/spoon/spoon_7.jpg",
  "/images/spoon/spoon_8.jpg",
  "/images/spoon/spoon_9.jpg",
  "/images/spoon/spoon_10.JPG",
  "/images/spoon/spoon_11.jpg",
  "/images/spoon/spoon_12.jpg",
  "/images/spoon/spoon_13.JPG",
  "/images/spoon/spoon_14.JPG",
  "/images/spoon/spoon_15.jpg",
  "/images/spoon/spoon_16.jpg",
  "/images/spoon/spoon_17.JPG",
  "/images/spoon/spoon_18.jpg",
  "/images/spoon/spoon_19.JPG",
];

type TopProps = {
  isLoaded: boolean;
  onLoadData?(): void;
  className?: string;
};

const Top: React.FC<TopProps> = ({ className = "" }) => {
  return (
    <FadeInContainer>
      <div id="Top" className={classNames(style.Top, className)}>
        <ul className={style.Top__photoList}>
          {images.map((image, index) => (
            <FadeInContainer>
              <li key={index} className={style.Top__photo}>
                <img src={image} alt={`${index}枚目の写真画像`} />
              </li>
            </FadeInContainer>
          ))}
        </ul>
      </div>
    </FadeInContainer>
  );
};

export default Top;
