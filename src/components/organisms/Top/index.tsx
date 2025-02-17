import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { FadeInContainer } from "../../atoms/FadeInContainer";

const images: string[] = [
  "/images/spoon/spoon_1.webp",
  "/images/spoon/spoon_2.webp",
  "/images/spoon/spoon_3.webp",
  "/images/spoon/spoon_4.webp",
  "/images/spoon/spoon_5.webp",
  "/images/spoon/spoon_6.webp",
  "/images/spoon/spoon_7.webp",
  "/images/spoon/spoon_8.webp",
  "/images/spoon/spoon_9.webp",
  "/images/spoon/spoon_10.webp",
  "/images/spoon/spoon_11.webp",
  "/images/spoon/spoon_12.webp",
  "/images/spoon/spoon_13.webp",
  "/images/spoon/spoon_14.webp",
  "/images/spoon/spoon_15.webp",
  "/images/spoon/spoon_16.webp",
  "/images/spoon/spoon_17.webp",
  "/images/spoon/spoon_18.webp",
  "/images/spoon/spoon_19.webp",
  "/images/spoon/spoon_20.webp",
  "/images/spoon/spoon_21.webp",
  "/images/spoon/spoon_22.webp",
  "/images/spoon/spoon_23.webp",
  "/images/spoon/spoon_24.webp",
  "/images/spoon/spoon_25.webp",
  "/images/spoon/spoon_26.webp",
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
        <div className={style.Top__textBody}>
          <p className={style.Top__textProfileEn}>
            Born in Shizuoka Prefecture in 1994, Taiki Kishiyama taught himself
            graphic and web design during his university years, which led him to
            discover photographic expression. After working for several
            companies, he now operates as a freelance designer based in Tokyo
            and Kyoto. While maintaining his practice in graphic design, web
            design, and web development, he began creating personal work
            primarily using film cameras in 2021. His artistic practice focuses
            on personal memories and emotions that are often overlooked and
            forgotten in daily life, capturing them from a perspective distinct
            from his commercial photography work.
          </p>
          <p className={style.Top__textJa}>
            かつて、大切なものを失う際の悲しさを、「その記憶自体を忘れること」で前に進んだ人は多いのではないだろうか、きっと僕もその一人だ。破れるほど読んだ絵本や、睡眠時間を削って聞いた音楽、多くの時間を共に過ごした恋人のような、自分だけにとって、しかし非常に大切だと思えるものを。僕たちはどうしたって忘れてしまうが、人は忘れる生き物であるという事実を、あまりにも当然のこととして受け入れ過ぎている。大切に思っていたという気持ちの記録は、どこにも残らず過去の遺物となり、やがて遺物となったことすらも忘れ去られていく。忘れることが良いことだという論調を耳にする機会は、現代では、本当に枚挙にいとまがない。本当に、忘れてしまってよいのだろうか。あったはずのものがなくなったことや、居たはずの人がいないこと、好きだったものに何も感じなくなったこと。そんな、僕だけが大切に大切に想ってきたことに気づける写真を、残しておきたいと考えている。
          </p>
        </div>
      </div>
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
      <div className={style.Top__textSp}>
        {/* <p className={style.Top__textProfileEn}>
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
        </p> */}
        <p className={style.Top__textJa}>
          かつて、大切なものを失う際の悲しさを、「その記憶自体を忘れること」で前に進んだ人は多いのではないだろうか、きっと僕もその一人だ。
          <br />
          破れるほど読んだ絵本や、睡眠時間を削って聞いた音楽、多くの時間を共に過ごした恋人のような、自分だけにとって、しかし非常に大切だと思えるものを。
          <br />
          <br />
          僕たちはどうしたって忘れてしまうが、人は忘れる生き物であるという事実を、あまりにも当然のこととして受け入れ過ぎている。
          <br />
          大切に思っていたという気持ちの記録は、どこにも残らず過去の遺物となり、やがて遺物となったことすらも忘れ去られていく。忘れることが良いことだという論調を耳にする機会は、現代では、本当に枚挙にいとまがない。
          <br />
          <br />
          本当に、忘れてしまってよいのだろうか。
          <br />
          あったはずのものがなくなったことや、居たはずの人がいないこと、好きだったものに何も感じなくなったこと。そんな、僕だけが大切に大切に想ってきたことに気づける写真を、残しておきたいと考えている。
        </p>
      </div>
    </div>
  );
};

export default Top;
