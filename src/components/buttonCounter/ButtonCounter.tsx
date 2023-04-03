import { FC } from 'react';
import './ButtonCounter.css'

interface ButtonProps {
  quantity: number;
  decrement?: () => void;
  increment?: () => void;
}

export const ButtonCounter: FC<ButtonProps> = (props) => {
  return (
    <div className="counter">
      <button
        onClick={props.decrement}
        className="counter__button"
      >
        -
      </button >
      <p className="counter__count">{props.quantity}</p>
      <button
        onClick={props.increment}
        className="counter__button"
      >
        +
      </button >
    </div>
  );
}