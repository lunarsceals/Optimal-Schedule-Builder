import React from "react";

interface Prop {
  text: string;
}

const Button = (prop: Prop) => {
  return (
    <button className="rounded-md bg-[#BA0C2F] px-4 py-2 font-semibold text-white">
      {prop.text.toUpperCase()}
    </button>
  );
};

export default Button;
