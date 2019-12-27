import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const Select = ({ id, onUpdate, options, value, ...props }) => {
  return (
    <select
      {...props}
      id={id}
      value={value}
      onChange={e => onUpdate(e.target.value)}
      onBlur={e => onUpdate(e.target.value)}
    >
      <option>All</option>
      {options.map(option => (
        <option key={option} value={option}>{` ${option} `}</option>
      ))}
    </select>
  );
};

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <Select
            id="animal"
            value={animal}
            onUpdate={setAnimal}
            options={ANIMALS}
          />
        </label>

        <label htmlFor="breed">
          Breed
          <Select
            id="breed"
            value={breed}
            onUpdate={setBreed}
            // disabled={breeds.length === 0}
            options={breeds}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
