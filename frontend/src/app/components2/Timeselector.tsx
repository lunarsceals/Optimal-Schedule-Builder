import { DropdownSearchFilter } from "./DropdownSearchFilter";

const hours = Array.from({ length: 12 }, (v, k) => k.toString());

const Timeselector = () => {
  return (
    <div className="flex">
      <DropdownSearchFilter
        className="rounded-md rounded-r-none border-2"
        items={hours}
        placeholder="00"
      />
      <DropdownSearchFilter className="border-2" placeholder="00" />
      <DropdownSearchFilter
        className="rounded-md rounded-l-none border-2"
        items={["AM", "PM"]}
        placeholder="AM"
      />
    </div>
  );
};

export default Timeselector;
