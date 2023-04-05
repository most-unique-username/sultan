import { FC } from 'react';

export interface ContainerProps {
  containerClass: string;
  children?: React.ReactElement | React.ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
  return (
    <div className={props.containerClass}>
      {props.children}
    </div>
  );
}