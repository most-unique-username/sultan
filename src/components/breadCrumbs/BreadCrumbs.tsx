import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IItemLink } from '../../types/types';
import './BreadCrumbs.css'

interface BreadCrumbsProps {
  prev?: IItemLink[];
  page: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  return (
    <div className="bread-crumbs">
      {props.prev?.map(item =>
        <NavLink to={item.link}>
          <p className="bread-crumbs__prev">{item.item}</p>
        </NavLink>
      )}
      <p className="bread-crumbs__page">{props.page}</p>

    </div>
  );
}