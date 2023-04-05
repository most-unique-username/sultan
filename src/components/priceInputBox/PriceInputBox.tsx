import { FC } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterActionTypes } from '../../store/reducers/types';
import './PriceInputBox.css'

interface BoxProps {
  min: number;
  max: number;
  boxClass?: string;
}

export const PriceInputBox: FC<BoxProps> = (props) => {
  const dispatch = useDispatch();

  const changeMinPrice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: FilterActionTypes.CHANGE_MIN_PTICE, payload: +event.target.value });
  }

  const changeMaxPrice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: FilterActionTypes.CHANGE_MAX_PTICE, payload: +event.target.value });
  }

  let inputClass: string = (props.boxClass && `inputPrice-box ${props.boxClass}`) || "inputPrice-box";
  return (
    <div className={inputClass}>
      <input
        className='inputPrice-input'
        type="number"
        defaultValue={props.min}
        onChange={changeMinPrice}
      />
      <p className='inputPrice-text'>-</p>
      <input
        className='inputPrice-input'
        type="number"
        defaultValue={props.max}
        onChange={changeMaxPrice}
      />
    </div>
  );
}