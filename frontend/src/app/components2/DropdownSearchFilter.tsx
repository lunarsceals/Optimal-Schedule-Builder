"use client";

import React, { useState, useEffect, useRef } from "react";

interface searchFilterProps {
  name?: string;
  items?: string[];
  placeholder?: string;
  className?: string;
  clearState?: boolean;
}

export const DropdownSearchFilter = ({
  name = "",
  items = [],
  placeholder = "",
  className = "",
  clearState,
}: searchFilterProps) => {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>(items);

  //Handles filtering the search input
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    const regex = new RegExp("^" + e.currentTarget.value, "i");
    const filter = items.filter((item) => regex.test(item));
    setFilteredData(filter);
  };

  //Handles clicking on a dropdown item
  const handleClick = (e: React.MouseEvent) => {
    setQuery(e.currentTarget.textContent ?? "");
    setIsOpen((prev) => !prev);
  };

  //Handles closing dropdown menu when clicked off
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [isOpen]);

  //This useEffect is to handle clearing the input when the form is submitted or cleared
  useEffect(() => {
    if (clearState && query !== "") {
      setQuery("");
    }
  }, [clearState, query]);

  return (
    <div className={`relative`}>
      <input
        name={name}
        value={query}
        onChange={handleQuery}
        onClick={() => setIsOpen((prev) => !prev)}
        placeholder={placeholder}
        className={`w-full p-2 outline-none ${className}`}
        autoComplete="off"
      />
      {/* DROPDOWN MENU */}
      {isOpen && filteredData.length !== 0 && (
        <ul
          ref={dropdownRef}
          className={`absolute max-h-44 w-full overflow-y-scroll scroll-smooth bg-white ${className} z-10`}
        >
          {/* DROPDOWN ITEMS */}
          {filteredData.map((item, index) => (
            <li
              key={index}
              onClick={(e) => handleClick(e)}
              className="bg-inherit px-2 py-1 hover:brightness-75"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
