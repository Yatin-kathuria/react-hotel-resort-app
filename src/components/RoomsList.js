import React from "react";
import Room from "./Room";

function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room) => {
          return <Room key={room.id} {...room} />;
        })}
      </div>
    </section>
  );
}

export default RoomsList;
