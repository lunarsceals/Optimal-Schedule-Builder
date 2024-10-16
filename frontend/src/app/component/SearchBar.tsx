import React from "react";

interface Prop {
  label: string;
}

//TODO: replace DropDown placeholder with component
const SearchBar = (prop: Prop) => {
  return (
    <div className="grid grid-cols-2">
      <label htmlFor={prop.label} className="col-start-1">
        {prop.label.toLowerCase().charAt(0).toUpperCase() + prop.label.slice(1)}
      </label>
      <select>
        <option>DropDown</option>
      </select>
    </div>
  );
};

export default SearchBar;
