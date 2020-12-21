import React from "react";
import { useGlobalContext } from "../context";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";

function RoomsContainer() {
  const { loading, sortedRooms, rooms } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default RoomsContainer;
