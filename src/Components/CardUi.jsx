import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "../Styles/CardUi.css";
function CardUi(props) {
  return (
    <div className="card__container">
      <a href={props.Link} target="_blank" rel="noopener noreferrer">
        <LazyLoadImage
          src={props.img}
          alt="site"
          className="card__site-img"
          effect="blur"
          key={props.img}
          height={props.img.height}
          width={props.img.width}
          placeholderSrc={props.img}
        />
      </a>
      <h2 className="card__heading">{props.title}</h2>
      <h6 className="card__desc">{props.description}</h6>
      <a href={props.Link} target="_blank" rel="noopener noreferrer">
        <button className="card__btn">open it</button>
      </a>
    </div>
  );
}

export default CardUi;
