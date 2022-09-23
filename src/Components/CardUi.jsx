import React from 'react'


import '../Styles/CardUi.css'
function CardUi(props) {
  return (
    <div className="card__container">
      <a href={props.Link} target="_blank" rel="noopener noreferrer">
        <img src={props.img} alt="site" className="card__site-img" />
      </a>
      <h2 className="card__heading">{props.title}</h2>
      <h6 className="card__desc">{props.description}</h6>
      <a href={props.Link} target="_blank" rel="noopener noreferrer">
        <button className="card__btn">open it</button>
      </a>
    </div>
  );
}

export default CardUi