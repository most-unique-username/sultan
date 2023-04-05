import { FC } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { FilterActionTypes } from '../store/reducers/types';

export interface CheckBoxProps {
  list: string[];
  boxClass: string;
  itemClass: string;
  title?: React.ReactElement | React.ReactNode;
}

export const CheckBox: FC<CheckBoxProps> = (props) => {
  const dispatch = useDispatch();

  const addBrand = (brand: string): void => {
    dispatch({ type: FilterActionTypes.ADD_BRAND, payload: brand });
  }
  return (
    <div className={props.boxClass}>
      {props.title}
      {props.list.map(item =>
        <label className={props.itemClass}>
          <input
            type="checkbox"
            onChange={() => addBrand(item)}
          />
          {item}
        </label>
      )}
    </div>
  );
}