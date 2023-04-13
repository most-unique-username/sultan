import { FC } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import './InputButton.css'

interface InputButtonProps {
  placeholder: string;
  icon: JSX.Element;
  value?: string;
  boxClass?: string;
  iconClass?: string;
  readOnly?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export const InputButton: FC<InputButtonProps> = (props) => {
  let boxClass: string = (props.boxClass && `input-box ${props.boxClass}`) || "input-box";
  let iconClass: string = (props.iconClass && `input-box__button ${props.iconClass}`) || "input-box__button";

  return (
    <div className={boxClass}>
      <Input
        inputClass='input-box__input'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        readOnly={props.readOnly}
      />
      <Button
        buttonClass={iconClass}
        onClick={props.onClick}
      >
        {props.icon}
      </Button>

    </div>
  );
}