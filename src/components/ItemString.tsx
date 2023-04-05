import { FC } from 'react';

interface ItemStringProps {
  item: string;
  itemClass: string;
  onClick?: () => void;
}

export const ItemString: FC<ItemStringProps> = (props) => {
  return (
    <p
      key={props.item}
      className={props.itemClass}
      onClick={props.onClick}
    >
      {props.item}
    </p>
  );
};