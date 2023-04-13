import { FC } from 'react';
import { IProduct } from '../types/types';
import { Container } from './Container';
import { ImgBox } from './ImgBox';
import { IconBox } from './IconBox';
import { NavLink } from 'react-router-dom';
import { List } from './List';
import { ItemString } from './ItemString';
import { productSizeIcon } from '../functions/productSizeIcon';
import { productSize } from '../functions/productSize';
import { productProperties } from '../functions/productProperties';
import noImg from "../img/noImage.jpg"

interface ProductBoxCatalogProps {
  product: IProduct;
  boxClass: string;
  boximgClass: string;
  imgClass: string;
  rowClass: string;
  iconClass: string;
  sizeClass: string;
  nameClass: string;
  propertyClass: string;
}

export const ProductBoxCatalog: FC<ProductBoxCatalogProps> = (props) => {
  return (

    <Container containerClass={props.boxClass}>

      <ImgBox
        imgClass={props.imgClass}
        imgSrc={props.product.url || noImg}
        boxClass={props.boximgClass}
      />

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

      <List<string>
        list={productProperties(props.product).filter((item) => item.includes("Бренд") ||
          item.includes("Страна") ||
          item.includes("Артикул"))}
        renderItem={(item: string) =>
          <ItemString
            item={item}
            itemClass={props.propertyClass}
          />}
      />

    </Container>
  );
};