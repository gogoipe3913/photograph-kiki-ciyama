import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";
import style from "./style.module.scss";
import classNames from "classnames";
import { ENTERED, EXITED } from "react-transition-group/Transition";
import { ANCHOR_ITEMS, EXTERNAL_URLS } from "../SideColumn/data";
import Overlay from "../../atoms/Overlay";

const ANIMATION_CLASS_NAMES = {
  ENTERED: style["Menu__contentsListWrapper--entered"],
  EXITED: style["Menu__contentsListWrapper--exited"],
} as const;

function getModifierClassName(state: string) {
  switch (state) {
    case ENTERED:
      return ANIMATION_CLASS_NAMES.ENTERED;
    case EXITED:
      return ANIMATION_CLASS_NAMES.EXITED;
    default:
      return;
  }
}

type MenuProps = {
  className?: string;
};

const Menu: React.FC<MenuProps> = ({ className = "" }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classNames(style.Menu, className)}>
      {isOpened ? (
        <Overlay
          isDisplayed={isOpened}
          closeDrawer={() => {
            setIsOpened(false);
          }}
        />
      ) : null}
      <button
        className={style.Menu__hamburgerButton}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <span
          className={classNames(
            style.Menu__hamburgerButtonLine,
            isOpened
              ? style["Menu__hamburgerButtonLine--top--rotated"]
              : style["Menu__hamburgerButtonLine--top"]
          )}
        />
        <span
          className={classNames(
            style.Menu__hamburgerButtonLine,
            isOpened
              ? style["Menu__hamburgerButtonLine--center--disappered"]
              : style["Menu__hamburgerButtonLine--center"]
          )}
        />
        <span
          className={classNames(
            style.Menu__hamburgerButtonLine,
            isOpened
              ? style["Menu__hamburgerButtonLine--bottom--rotated"]
              : style["Menu__hamburgerButtonLine--bottom"]
          )}
        />
      </button>
      <div
        className={classNames(
          style.Menu__contents,
          isOpened ? style["Menu__contents--displayed"] : ""
        )}
      >
        <CSSTransition
          in={isOpened}
          timeout={400}
          unmountOnExit
          // react-transition-groupのデフォルトclassNameを出力しないようにする
          classNames={{}}
        >
          {(state) => (
            <div
              className={classNames(
                style.Menu__contentsListWrapper,
                getModifierClassName(state)
              )}
            >
              <ul className={style.Menu__contentsList}>
                {ANCHOR_ITEMS.map((item, index) =>
                  item.id !== "top" ? (
                    <li key={index} className={style.Menu__contentsItem}>
                      <Link
                        to={item.id}
                        duration={600}
                        smooth={true}
                        onClick={() => {
                          setIsOpened(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
              <div className={style.Menu__separator} />
              <a href={EXTERNAL_URLS.WEB_SHOP} className={style.Menu__link}>
                Web shop
              </a>
              <a href={EXTERNAL_URLS.INSTAGRAM} className={style.Menu__link}>
                IG
              </a>
            </div>
          )}
        </CSSTransition>
      </div>
    </div>
  );
};

export default Menu;
