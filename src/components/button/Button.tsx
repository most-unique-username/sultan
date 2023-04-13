import { FC, MouseEvent } from 'react';
import './Button.css'

interface ButtonProps {
  buttonClass?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactElement | React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const buttonClass = (props.buttonClass && `buttonIcon ${props.buttonClass}`) ??
    "buttonIcon";
  const type = props.type ?? "button";

  return (
    <button
      onClick={props.onClick}
      className={buttonClass}
      type={type}
    >
      {props.children}
    </button >
  );
}