import React from "react";

interface Prop {
  label: string;
}

//TODO: replace DropDown placeholder with component
const SearchBar = (prop: Prop) => {
  return (
    <div className="grid gap-5 text-right sm:grid-cols-3">
      <label htmlFor={prop.label} className="col-start-1">
        {prop.label.toLowerCase().charAt(0).toUpperCase() +
          prop.label.slice(1) +
          ":"}
      </label>
      <select className="col-span-2 w-80 font-normal">
        <option>DropDown</option>
      </select>
    </div>
  );
};

export default SearchBar;
