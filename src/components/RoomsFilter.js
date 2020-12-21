import React from "react";
import { useGlobalContext } from "../context";
import Title from "./Title";

const getUniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function RoomsFilter({ rooms }) {
  const {
    handleChange,
    filter: {
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    },
  } = useGlobalContext();

  const types = ["all", ...getUniqueValues(rooms, "type")];
  const capacities = [...getUniqueValues(rooms, "capacity")];

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types.map((type, index) => (
              <option value={type} key={index}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {/*End of  select type */}

        {/* select guest capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities.map((capacity, index) => (
              <option value={capacity} key={index}>
                {capacity}
              </option>
            ))}
          </select>
        </div>
        {/*End of  select guest capacity */}

        {/* select room price */}
        <div className="form-group">
          <label htmlFor="price">room Price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*End of  room price */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size (in SQRT)</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/*End of size*/}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/*End of extras*/}
      </form>
    </section>
  );
}

export default RoomsFilter;
