import { FC } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterActionTypes } from '../../store/reducers/types';
import './PriceInputBox.css'

interface BoxProps {
  min: number;
  max: number;
  boxClass?: string;
  changeMinPrice?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeMaxPrice?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PriceInputBox: FC<BoxProps> = (props) => {
  let inputClass: string = (props.boxClass && `inputPrice-box ${props.boxClass}`) || "inputPrice-box";

  return (
    <div className={inputClass}>
      <input
        className='inputPrice-input'
        type="number"
        value={props.min}
        onChange={props.changeMinPrice}
      />
      <p className='inputPrice-text'>-</p>
      <input
        className='inputPrice-input'
        type="number"
        value={props.max}
        onChange={props.changeMaxPrice}
      />
    </div>
  );
}