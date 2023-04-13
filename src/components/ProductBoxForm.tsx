import { FC } from 'react';
import { IProduct } from '../types/types';
import { Container } from './Container';
import { productSize } from '../functions/productSize';
import { ImgBox } from './ImgBox';
import noImg from "../img/noImage.jpg"

interface ProductBoxFormProps {
  product: IProduct;
  boxClass: string;
  productboxClass: string;
  boxImgClass: string;
  imgClass: string;
  nameClass: string;
  propertyClass: string;
  children?: React.ReactElement | React.ReactNode;
}

export const ProductBoxForm: FC<ProductBoxFormProps> = (props) => {
  let categoryName: string = "Категория";
  if (props.product.category.length > 1) categoryName = "Категории"
  return (

    <Container containerClass={props.boxClass}>

      <ImgBox
        imgSrc={props.product.url || noImg}
        boxClass={props.boxImgClass}
        imgClass={props.imgClass}
      />

      <Container containerClass={props.productboxClass}>

        <p className={props.propertyClass}>{`Артикул: ${props.product.vendorCode}`}</p>
        <p className={props.nameClass}>{props.product.name}</p>
        <p className={props.propertyClass}>{`Бренд: ${props.product.brand}`}</p>
        <p className={props.propertyClass}>{`Страна-производитель: ${props.product.country}`}</p>
        <p className={props.propertyClass}>{`${props.product.sizeType}: ${productSize(props.product)}`}</p>
        <p className={props.propertyClass}>{`Цена: ${props.product.price}`}</p>
        <p className={props.propertyClass}>{`${categoryName}: ${props.product.category.join(", ")}`}</p>
        <p className={props.propertyClass}>{props.product.description}</p>

      </Container>

      {props.children}

    </Container>

  );
};