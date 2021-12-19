import React, { FC } from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  customStyle?: string;
}

const Button: FC<Props> = ({ onClick, children, disabled, customStyle }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        customStyle
          ? customStyle
          : `bg-yellow px-8 py-3.5 text-font-black rounded-lg hover:bg-hover-yellow cursor-pointer disabled:cursor-not-allowed disabled:bg-disabled-gray disabled:text-disabled-gray-font whitespace-nowrap`
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
