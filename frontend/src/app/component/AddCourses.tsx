import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import TabButton from "./TabButton";

const AddCourses = () => {
  return (
    <div className="min-w-min">
      <div className="flex items-stretch gap-2 text-lg font-semibold text-white">
        <TabButton tabName="Section" />
        <TabButton tabName="Instructor" />
        <TabButton tabName="CRN" />
      </div>
      <div className="border-x-4 border-b-4 bg-[#FFF7F9] p-10">
        <div className="mb-10 flex justify-center">
          <div className="space-y-8 text-xl font-bold">
            <SearchBar label={"subject"} />
            <SearchBar label={"course"} />
          </div>
        </div>
        <section className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-end">
          <Button text={"search"} />
          <Button text={"add"} />
        </section>
      </div>
    </div>
  );
};

export default AddCourses;
