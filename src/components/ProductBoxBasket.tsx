import { FC } from 'react';
import { IProduct } from '../types/types';
import { Container } from './Container';
import { ImgBox } from './ImgBox';
import { IconBox } from './IconBox';
import { NavLink } from 'react-router-dom';
import { productSizeIcon } from '../functions/productSizeIcon';
import { productSize } from '../functions/productSize';
import noImg from "../img/noImage.jpg"

interface ProductBoxBasketProps {
  product: IProduct;
  boxClass: string;
  productboxClass: string;
  boximgClass: string;
  imgClass: string;
  rowClass: string;
  iconClass: string;
  sizeClass: string;
  nameClass: string;
  descriptionClass: string;
}

export const ProductBoxBasket: FC<ProductBoxBasketProps> = (props) => {
  return (

    <Container containerClass={props.boxClass}>

      <ImgBox
        imgSrc={props.product.url || noImg}
        boxClass={props.boximgClass}
        imgClass={props.imgClass}
      />

      <Container containerClass={props.productboxClass}>

        <Container containerClass={props.rowClass}>

          <IconBox
            icon={productSizeIcon(props.product, "small")}
            boxClass={props.iconClass}
          />

          <p className={props.sizeClass}>{productSize(props.product)}</p>

        </Container>

        <NavLink to={`/catalog/${props.product.vendorCode}`}>
          <p className={props.nameClass}>{props.product.name}</p>
        </NavLink>
        <p className={props.descriptionClass}>{props.product.description}</p>

      </Container>

    </Container>

  );
};