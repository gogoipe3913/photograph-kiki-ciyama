import React, { useState } from "react";
import Top from "../organisms/Top";
import style from "./style.module.scss";
import Loading from "../atoms/Loading";

const Templates: React.FC = () => {
  // ファーストビューのステータス
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Loading isLoadedFirstImage={isLoaded} />
      <div className={style.Templates}>
        <Top
          isLoaded={isLoaded}
          onLoadData={() => {
            setIsLoaded(true);
          }}
          className={style.Templates__top}
        />
      </div>
    </>
  );
};

export default Templates;
