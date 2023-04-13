import { FC } from 'react';

export interface ContainerProps {
  containerClass: string;
  hidden?: boolean;
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
}

export const Container: FC<ContainerProps> = (props) => {
  return (
    <div
      className={props.containerClass}
      hidden={props.hidden}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}