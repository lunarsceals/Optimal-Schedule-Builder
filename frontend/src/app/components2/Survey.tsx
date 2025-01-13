"use client";
import { useRef, useState } from "react";
import { DropdownSearchFilter } from "./DropdownSearchFilter";
import { Button } from "./Button";
import ToggleButton from "./ToggleButton";
import Timeselector from "./Timeselector";

//Dummy Data
//TODO: Replace Dummy data
const majorList = [
  "Psychology",
  "Biology/Biological Sciences",
  "Computer Science",
  "Computer and Information Sciences",
  "Marketing/marketing management",
  "Finance",
];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const semesterList = [
  `Fall ${new Date().getFullYear()}`,
  `Spring ${new Date().getFullYear() + 1}`,
  `Summer ${new Date().getFullYear() + 1}`,
];

export const QuestionnareForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formSubmit, setFormSubmit] = useState(false);
  const [filteredDays, setFilteredDays] = useState<string[]>([]);

  const clearInput = () => {
    setFormSubmit(true);
    setFilteredDays([]);
    setTimeout(() => {
      setFormSubmit(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
    console.log(filteredDays);
    clearInput();
  };

  const selectDays = (e: React.MouseEvent<HTMLButtonElement>) => {
    const day = e.currentTarget.dataset.value;
    if (day) {
      setFilteredDays((prev) => {
        if (prev.includes(day)) {
          return prev.filter((d) => d !== day);
        } else {
          return [...prev, day];
        }
      });
    }
  };

  return (
    <div className="flex flex-1 font-bold">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="z-10 flex w-full flex-col gap-10"
      >
        {/* Form Questions and Input */}
        <div>
          <h1>What&apos;s your major?</h1>
          <DropdownSearchFilter
            name="major"
            items={majorList}
            placeholder="Enter your major"
            className="rounded-md border-2"
            clearState={formSubmit}
          />
        </div>
        <div>
          <h1>Select Preferred Days</h1>
          <div className="flex flex-row">
            {days.map((day, index) => (
              <ToggleButton
                key={index}
                data={day}
                text={day[0]}
                toggledStyle="bg-white text-nearly-black hover:border-pink-200 hover:bg-dusty-pink"
                untoggledStyle="border-bulldog-red bg-bulldog-red text-white duration-300 ease-in-out hover:border-dusty-pink hover:bg-red-800"
                className={`h-12 flex-1 border-2 sm:h-16 ${
                  index === 0 && "rounded-l-md"
                } ${index === days.length - 1 && "rounded-r-md"}`}
                onClick={(e) => selectDays(e)}
                clearState={formSubmit}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Timeselector />
          <span className="flex items-center justify-center">-</span>
          <Timeselector />
        </div>
        <div>
          <h1>Which Term?</h1>
          <DropdownSearchFilter
            name="term"
            items={semesterList}
            placeholder="Select your term"
            clearState={formSubmit}
            className="rounded-md border-2"
          />
        </div>

        {/* Form Buttons */}
        <div className="flex items-center gap-6">
          <Button
            text="clear"
            type="reset"
            onClick={clearInput}
            className="w-1/2 border-2 bg-white py-3 text-nearly-black transition ease-in-out hover:border-bulldog-red hover:text-bulldog-red"
          />
          <Button
            text="submit"
            type="submit"
            className="w-1/2 border-dusty-pink py-3 text-white transition ease-in-out hover:border-2 hover:border-nearly-black hover:bg-green-400 hover:text-nearly-black"
          />
        </div>
      </form>
    </div>
  );
};
