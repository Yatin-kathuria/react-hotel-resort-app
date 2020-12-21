import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

function Room({ images, name, slug, price }) {
  return (
    <>
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt={name} />
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            feature
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    </>
  );
}

export default Room;
