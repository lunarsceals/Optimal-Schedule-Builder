import React from "react";

interface Prop {
  text: string;
}

const Button = (prop: Prop) => {
  return (
    <button className="rounded-md bg-red-400 px-4 py-2">
      {prop.text.toUpperCase()}
    </button>
  );
};

export default Button;
