import { FC } from 'react';

export interface IconBoxProps {
  icon: JSX.Element;
  boxClass: string;
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
}

export const IconBox: FC<IconBoxProps> = (props) => {
  return (
    <div
      className={props.boxClass}
      onClick={props.onClick}
    >
      {props.icon}
      {props.children}
    </div>
  );
}