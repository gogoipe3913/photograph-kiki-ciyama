import React, { useState, useEffect } from "react";
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

const Top: React.FC<TopProps> = ({ onLoadData = () => {}, className = "" }) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = images.length;

  const handleImageLoad = () => {
    setLoadedImages((prevCount) => prevCount + 1);
  };

  const allImagesLoaded = loadedImages === totalImages;

  useEffect(() => {
    if (allImagesLoaded) {
      onLoadData();
    }
  }, [allImagesLoaded]);

  return (
    <div
      id="Top"
      className={classNames(
        style.Top,
        allImagesLoaded ? style["Top--displayed"] : "",
        className
      )}
    >
      <div className={style.Top__text}>
        <h1>Taiki Kishiyama</h1>
        <p>
          Born in Shizuoka Prefecture in 1994, Taiki Kishiyama taught himself
          graphic and web design during his university years, which led him to
          discover photographic expression. After working for several companies,
          he now operates as a freelance designer based in Tokyo and Kyoto.
          While maintaining his practice in graphic design, web design, and web
          development, he began creating personal work primarily using film
          cameras in 2021. His artistic practice focuses on personal memories
          and emotions that are often overlooked and forgotten in daily life,
          capturing them from a perspective distinct from his commercial
          photography work.
        </p>
      </div>
      {!allImagesLoaded && (
        <div>
          Loading images... {loadedImages}/{totalImages}
        </div>
      )}
      <ul className={style.Top__photoList}>
        {images.map((image, index) => (
          <FadeInContainer key={index}>
            <li className={style.Top__photo}>
              <img
                width={375}
                src={image}
                alt={`${index}枚目の写真画像`}
                onLoad={handleImageLoad}
              />
            </li>
          </FadeInContainer>
        ))}
      </ul>
    </div>
  );
};

export default Top;
