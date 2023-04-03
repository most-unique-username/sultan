import { FC } from 'react';
import './InputWithIcon.css'
import { IconBox } from '../IconBox';
import { Button } from '../button/Button';

export interface InputProps {
  placeholder: string;
  icon: JSX.Element;
  inputClass?: string;
  iconClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export const InputWithIcon: FC<InputProps> = (props) => {
  let inputClass: string = (props.inputClass && `inputIcon-box ${props.inputClass}`) || "inputIcon-box";
  let inputIconClass: string = (props.iconClass && `inputIcon-icon ${props.iconClass}`) || "inputIcon-icon";

  return (
    <div className={inputClass}>
      <input
        className='inputIcon-input'
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <button
        className={inputIconClass}
        onClick={props.onClick}
      >
        {props.icon}
      </button>
    </div>
  );
}