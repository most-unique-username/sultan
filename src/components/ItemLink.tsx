import { FC } from 'react';
import { ILink } from '../types/types';

interface ItemLinkProps {
  item: ILink;
  linkClass: string;
}

export const ItemLink: FC<ItemLinkProps> = (props) => {
  return (
    <a className={props.linkClass} href={props.item.link}>{props.item.text}</a>
  );
};