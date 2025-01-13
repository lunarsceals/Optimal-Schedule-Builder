import React, { useState, useEffect } from "react";

interface toggleButtonData {
  text?: string;
  data?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  clearState?: boolean;
}

interface toggleButtonProps {
  toggledStyle: string;
  untoggledStyle: string;
  className?: string;
}

const ToggleButton = ({
  text = "",
  data = "",
  onClick,
  clearState = false,
  toggledStyle,
  untoggledStyle,
  className = "",
}: toggleButtonProps & toggleButtonData) => {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    if (clearState) {
      setToggled(false);
    }
  }, [clearState]);

  return (
    <button
      className={`${className} ${toggled ? untoggledStyle : toggledStyle}`}
      data-value={data}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onClick) {
          onClick(e);
        }
        setToggled((prev) => !prev);
      }}
    >
      {text}
    </button>
  );
};

export default ToggleButton;
