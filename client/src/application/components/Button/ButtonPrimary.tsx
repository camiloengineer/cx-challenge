import React, { FC } from "react";
import Button, { ButtonProps } from "application/components/Button/Button";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
