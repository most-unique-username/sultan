import { FC } from 'react';

export interface ImgBoxProps {
  imgSrc: string;
  imgClass: string;
  boxClass: string;
}

export const ImgBox: FC<ImgBoxProps> = (props) => {
  return (
    <div className={props.boxClass}>
      <img className={props.imgClass} src={props.imgSrc} />
    </div>
  );
}