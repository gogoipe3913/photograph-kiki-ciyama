import React, { useState } from "react";
import Top from "../organisms/Top";
import style from "./style.module.scss";

const Templates: React.FC = () => {
  // ファーストビューのステータス
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={style.Templates}>
      <div className={style.Templates__mainColumn}>
        <Top
          isLoaded={isLoaded}
          onLoadData={() => {
            setIsLoaded(true);
          }}
          className={style.Templates__top}
        />
      </div>
    </div>
  );
};

export default Templates;
