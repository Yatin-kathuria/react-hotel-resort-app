import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomsContainer from "../components/RoomsContainer";

function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="rooms">
          <Link to="/" className="btn-primary">
            retun home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}

export default Rooms;
