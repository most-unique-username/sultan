import { FC } from 'react';

interface ItemInputProps {
  item: string;
  itemClass: string;
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ItemInput: FC<ItemInputProps> = (props) => {
  return (
    <label
      className={props.itemClass}
    >
      <input
        type="checkbox"
        onChange={props.onCheck}
      />
      {props.item}
    </label>
  );
};