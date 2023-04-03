import { FC } from 'react';

export interface IconBoxProps {
  icon: JSX.Element;
  boxClass: string;
  children?: React.ReactElement | React.ReactNode;
}

export const IconBox: FC<IconBoxProps> = (props) => {
  return (
    <div className={props.boxClass}>
      {props.icon}
      {props.children}
    </div>
  );
}