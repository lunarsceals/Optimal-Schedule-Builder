import React from "react";

interface Prop {
  tabName: string;
}

const TabButton = (prop: Prop) => {
  return (
    <button className="flex-1 text-nowrap rounded-t-md bg-[#BA0C2F] px-6 py-1 text-justify">
      By {prop.tabName}
    </button>
  );
};

export default TabButton;
