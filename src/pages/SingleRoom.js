import React, { Component } from "react";
import defaultBCG from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  const { getRoom } = useGlobalContext();
  const { slug } = useParams();
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  return (
    <>
      <StyledHero img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : ${size} SQFT</h6>
            <h6>
              mx capacity : {capacity} {capacity > 1 ? `people` : "person"}
            </h6>
            <h6>{pets ? `pets allowed` : " No pets allowed"}</h6>
            <h6>{breakfast ? `free breakfast included` : null}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras : </h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
