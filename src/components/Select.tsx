import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FilterActionTypes } from '../store/reducers/types';

interface SelectProps<T> {
  selectClass: string;
  options: T[];
  renderOption: (option: T) => React.ReactNode;
  multiple?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select<T>(props: SelectProps<T>) {

  return (
    <select
      className={props.selectClass}
      onChange={props.onChange}
      multiple={props.multiple}
      required={props.required}
    >
      {props.options.map(props.renderOption)}
    </select>
  );
}