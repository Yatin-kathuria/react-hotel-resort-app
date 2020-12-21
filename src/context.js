import React, { useState, useContext, useEffect } from "react";
import items from "./data";
const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });
  //get data

  const formateData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = rooms.find((room) => room.slug === slug);
    return tempRooms;
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(type, name, value);
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterRooms = () => {
    let {
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = filter;

    capacity = parseInt(capacity);
    price = parseInt(price);
    console.log(price);

    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    tempRooms = tempRooms.filter((room) => room.price <= price);
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === breakfast);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === pets);
    }

    setSortedRooms(tempRooms);

    console.log(tempRooms);
  };

  useEffect(() => {
    filterRooms();
  }, [filter]);

  useEffect(() => {
    setLoading(true);
    let rooms = formateData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setFilter((prevState) => ({
      ...prevState,
      maxPrice,
      price: maxPrice,
      maxSize,
    }));
    setLoading(false);
  }, []);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        featuredRooms,
        sortedRooms,
        loading,
        getRoom,
        handleChange,
        filter,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(RoomContext);
};

export { RoomProvider };
