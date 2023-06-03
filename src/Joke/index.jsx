// Vytvořte komponentu Joke, která zobrazuje jeden vtip. Tato komponenta bude sídlet ve vlastní složce se všemi potřebnými CSS styly a obrázky. Komponenta Joke nechť má pět props: userAvatar, userName, text, likes, dislikes.

import React from "react";
import "./style.css";
import { useState } from "react";

export const Joke = (props) => {
  const { avatar, name, text, likes, dislikes } = props;
  const [likesUp, setLikesUp] = useState(likes);
  const [likesDown, setLikesDown] = useState(dislikes);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={avatar} />
            <p className="user-name">{name}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          {/* button like */}
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setLikesUp(likesUp + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likesUp}
          </span>
          {/* button dislike */}
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setLikesDown(likesDown + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {likesDown}
          </span>
        </div>
      </div>
    </div>
  );
};
