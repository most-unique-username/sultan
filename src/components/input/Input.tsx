import { FC } from 'react';
import './Input.css'

interface InputProps {
  placeholder: string;
  value?: string;
  required?: boolean;
  inputClass?: string;
  disabled?: boolean;
  type?: "number";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
  const inputClass = (props.inputClass && `input ${props.inputClass}`) ??
    "input";


  return (
    <input
      className={inputClass}
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      disabled={props.disabled}
    />
  );
}