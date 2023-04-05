import { FC } from 'react';

interface ContactBoxProps {
  title: string;
  subtitle: string;
  titleClass: string;
  subtitleClass: string;
  boxClass: string;
  children?: React.ReactElement | React.ReactNode;
}

export const ContactBox: FC<ContactBoxProps> = (props) => {
  return (
    <div className={props.boxClass}>
      <p className={props.titleClass}>{props.title}</p>
      <p className={props.subtitleClass}>{props.subtitle}</p>
      {props.children}
    </div>
  );
}