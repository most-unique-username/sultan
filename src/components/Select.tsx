import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FilterActionTypes } from '../store/reducers/types';

export interface SelectProps {
  selectClass: string;
}

export const Select: FC<SelectProps> = (props) => {
  const dispatch = useDispatch();

  const sortProducts = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: FilterActionTypes.SORT_PRODUCTS, payload: event.target.value });
  }

  return (
    <select
      className={props.selectClass}
      onChange={sortProducts}
    >
      <option value="NAME_INCREASE">Название ↓</option>
      <option value="NAME_DECREASE">Название ↑</option>
      <option value="PRICE_DECREASE">Цена ↓</option>
      <option value="PRICE_INCREASE">Цена ↑</option>
    </select>
  );
}