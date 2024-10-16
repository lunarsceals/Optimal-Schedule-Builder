import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import TabButton from "./TabButton";

const AddCourses = () => {
  return (
    <div className="min-w-min">
      <div className="flex items-stretch gap-2">
        <TabButton tabName="Section" />
        <TabButton tabName="Instructor" />
        <TabButton tabName="CRN" />
      </div>
      <div className="bg-red-100 p-10">
        <div className="mb-10 flex justify-center">
          <div className="space-y-4">
            <SearchBar label={"subject"} />
            <SearchBar label={"course"} />
          </div>
        </div>
        <section className="flex justify-center gap-4 sm:justify-end">
          <Button text={"search"} />
          <Button text={"add"} />
        </section>
      </div>
    </div>
  );
};

export default AddCourses;
