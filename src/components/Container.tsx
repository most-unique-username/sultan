import { FC } from 'react';

export interface ContainerProps {
  containerClass: string;
  hidden?: boolean;
  testId?: string;
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
}

export const Container: FC<ContainerProps> = (props) => {
  return (
    <div
      data-testid={props.testId}
      className={props.containerClass}
      hidden={props.hidden}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}