import { FC } from 'react';
import './Button.css'

interface ButtonProps {
  buttonClass?: string;
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const buttonClass = (props.buttonClass && `buttonIcon ${props.buttonClass}`) ||
    "buttonIcon"

  return (
    <button
      onClick={props.onClick}
      className={buttonClass}
    >
      {props.children}
    </button >
  );
}