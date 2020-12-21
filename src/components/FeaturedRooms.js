import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

function FeaturedRooms() {
  const { featuredRooms, loading } = useGlobalContext();
  const rooms = featuredRooms.map((room) => {
    return <Room key={room.id} {...room} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
}

export default FeaturedRooms;
