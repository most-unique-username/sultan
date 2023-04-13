import { FC } from 'react';
import { IItemLink } from '../types/types';

interface ItemLinkProps {
  item: IItemLink;
  linkClass: string;
}

export const ItemLink: FC<ItemLinkProps> = (props) => {
  return (
    <a className={props.linkClass} href={props.item.link}>{props.item.item}</a>
  );
};