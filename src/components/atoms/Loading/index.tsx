import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type LoadingProps = {
  isLoadedFirstImage: boolean;
};

const Loading: React.FC<LoadingProps> = ({ isLoadedFirstImage }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    if (isLoadedFirstImage) {
      setTimeout(() => {
        setIsDisplayed(false);
        /**
         * ローディングページのフェードアウトアニメーションを待ってから
         * DOM上の削除を行いたいので、1.5秒待つ
         */
      }, 1500);
    }
  }, [isLoadedFirstImage]);

  return isDisplayed ? (
    <div
      className={classNames(
        style.Loading,
        isLoadedFirstImage ? style["Loading--end"] : ""
      )}
    >
      <div className={style.Loading__logoWrapper}>
        <div className={style.Loading__logo}>
          <p>Taiki Kishiyama</p>
        </div>
        <p>Loading...</p>
      </div>
    </div>
  ) : null;
};

export default Loading;
