import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../Container';
import { IconBox } from '../../IconBox';
import { ImgBox } from '../../ImgBox';
import { BreadCrumbs } from '../../breadCrumbs/BreadCrumbs';
import { List } from '../../List';
import { ItemString } from '../../ItemString';
import { Button } from '../../button/Button';
import { ButtonCounter } from '../../buttonCounter/ButtonCounter';
import { IProduct } from '../../../types/types';
import { BasketActionTypes } from '../../../store/reducers/types';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { productProperties } from '../../../functions/productProperties';
import { productSize } from '../../../functions/productSize';
import { productSizeIcon } from '../../../functions/productSizeIcon';
import './Product.css'
import '../../../styles/styles.css'
import noImg from "../../../img/noImage.jpg"

const basketIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <path d="M20.3257 2.89296C20.1958 2.71151 20.0215 2.62079 19.8027 2.62079H5.87793L5.5 1.63689C5.4043 1.31431 5.27441 1.03877 5.11035 0.810279C4.94629 0.581784 4.77197 0.420494 4.5874 0.326408C4.40283 0.232322 4.24219 0.168478 4.10547 0.134876C3.96875 0.101274 3.83203 0.0844727 3.69531 0.0844727H0.885742C0.708008 0.0844727 0.557617 0.144957 0.43457 0.265924C0.311523 0.386892 0.25 0.541462 0.25 0.729634C0.25 0.837161 0.277344 0.941327 0.332031 1.04213C0.386719 1.14294 0.465332 1.22023 0.567871 1.27399C0.67041 1.32775 0.776367 1.35463 0.885742 1.35463H3.69531C3.75 1.35463 3.80127 1.36135 3.84912 1.3748C3.89697 1.38824 3.96191 1.44536 4.04395 1.54617C4.12598 1.64697 4.19434 1.79818 4.24902 1.9998L7.19043 10.0764C7.21777 10.1571 7.26221 10.2343 7.32373 10.3083C7.38525 10.3822 7.45703 10.4393 7.53906 10.4796C7.62109 10.52 7.70996 10.5401 7.80566 10.5401H16.665C16.8018 10.5401 16.9282 10.4998 17.0444 10.4191C17.1606 10.3385 17.2393 10.2377 17.2803 10.1167L20.418 3.48772C20.4863 3.27267 20.4556 3.07442 20.3257 2.89296ZM16.2139 9.24979H8.31836L6.22656 3.91111H18.8594L16.2139 9.24979ZM15.0312 11.2398C14.5801 11.2398 14.1938 11.3977 13.8726 11.7136C13.5513 12.0294 13.3906 12.4092 13.3906 12.8527C13.3906 13.2963 13.5513 13.676 13.8726 13.9918C14.1938 14.3077 14.5801 14.4656 15.0312 14.4656C15.4824 14.4656 15.8687 14.3077 16.1899 13.9918C16.5112 13.676 16.6719 13.2963 16.6719 12.8527C16.6719 12.4092 16.5112 12.0294 16.1899 11.7136C15.8687 11.3977 15.4824 11.2398 15.0312 11.2398ZM9.125 11.2398C8.82422 11.2398 8.54736 11.3137 8.29443 11.4616C8.0415 11.6094 7.84326 11.8043 7.69971 12.0463C7.55615 12.2882 7.48438 12.557 7.48438 12.8527C7.48438 13.2963 7.64502 13.676 7.96631 13.9918C8.2876 14.3077 8.67383 14.4656 9.125 14.4656C9.57617 14.4656 9.9624 14.3077 10.2837 13.9918C10.605 13.676 10.7656 13.2963 10.7656 12.8527C10.7656 12.7452 10.7554 12.6377 10.7349 12.5301C10.7144 12.4226 10.6836 12.3218 10.6426 12.2277C10.6016 12.1336 10.5503 12.0429 10.4888 11.9555C10.4272 11.8682 10.3589 11.7875 10.2837 11.7136C10.2085 11.6397 10.1265 11.5725 10.0376 11.512C9.94873 11.4515 9.85645 11.4011 9.76074 11.3608C9.66504 11.3204 9.5625 11.2902 9.45312 11.27C9.34375 11.2499 9.23438 11.2398 9.125 11.2398Z" fill="white" />
</svg>

const linkIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M4.00004 13.5C4.87469 13.4974 5.71626 13.1653 6.35704 12.57L12.617 16.147C12.4073 16.9666 12.4998 17.8343 12.8775 18.5913C13.2552 19.3483 13.893 19.9439 14.674 20.2692C15.455 20.5944 16.327 20.6274 17.1304 20.3623C17.9338 20.0971 18.6148 19.5515 19.0488 18.8252C19.4827 18.099 19.6406 17.2408 19.4935 16.4076C19.3464 15.5745 18.9042 14.8222 18.2478 14.2885C17.5914 13.7548 16.7647 13.4753 15.919 13.5013C15.0734 13.5273 14.2655 13.857 13.643 14.43L7.38304 10.853C7.44904 10.603 7.48504 10.344 7.49104 10.085L13.641 6.56996C14.2332 7.10874 14.9927 7.42747 15.792 7.47268C16.5913 7.51789 17.3818 7.28684 18.031 6.81828C18.6802 6.34972 19.1484 5.67217 19.3572 4.89929C19.5661 4.1264 19.5027 3.30522 19.1779 2.5735C18.853 1.84178 18.2864 1.24404 17.5731 0.88056C16.8597 0.517083 16.0431 0.409982 15.2602 0.577226C14.4772 0.744469 13.7756 1.17588 13.2731 1.79909C12.7705 2.42229 12.4976 3.19937 12.5 3.99996C12.504 4.28796 12.543 4.57497 12.617 4.85296L6.93304 8.09997C6.60341 7.59003 6.1468 7.17461 5.60805 6.89454C5.06931 6.61446 4.46697 6.47936 3.86021 6.50251C3.25346 6.52566 2.66316 6.70627 2.14732 7.02658C1.63148 7.34689 1.20785 7.79589 0.918041 8.32946C0.628232 8.86303 0.48222 9.46282 0.494351 10.0699C0.506482 10.677 0.676338 11.2704 0.98723 11.792C1.29812 12.3136 1.73936 12.7453 2.26758 13.0447C2.7958 13.3442 3.39284 13.5011 4.00004 13.5Z" fill="#FFC85E" />
</svg>

const priceIcon = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
  <path d="M10.958 4.375H8.12467V0.125H3.87467V4.375H1.04134L5.99967 10.0417L10.958 4.375ZM0.333008 11.4583H11.6663V12.875H0.333008V11.4583Z" fill="#3F4E65" />
</svg>

const moreIcon = <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="#3F4E65" />
</svg>

const lessIcon = <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.5 0L6.53109 5.25L0.468911 5.25L3.5 0Z" fill="#3F4E65" />
</svg>


type Visibile = {
  description: boolean;
  properties: boolean;
}

export const Product = () => {

  const defaultVisibile: Visibile = {
    description: false,
    properties: false
  };

  const filter = useTypedSelector(state => state.filter);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(1);
  const [visibile, setVisibile] = useState<Visibile>(defaultVisibile);
  const params = useParams();
  const product: IProduct = filter.products.filter(item => item.vendorCode === Number(params.code))[0];
  const productProperty: string[] = productProperties(product);

  const addProduct = (product: IProduct, quantity: number): void => {
    dispatch({ type: BasketActionTypes.CHANGE_QUANTITY_PRODUCT, payload: { product: product, difference: quantity } });
  }

  return (
    <div className='page-product'>

      <Container containerClass='page-product__container container'>

        <BreadCrumbs
          prev={[
            { item: "Главная", link: "/sultan" },
            { item: "Каталог", link: "/catalog" }
          ]}
          page={product.name}
        />

        <Container containerClass='page-product__row'>

          <ImgBox
            imgSrc={product.url || noImg}
            imgClass="page-product__img"
            boxClass="page-product__img-box"
          />

          <Container containerClass='page-product__product-data'>
            <p className='page-product__stock'>В наличии</p>

            <p className='page-product__title'>{product.name}</p>

            <Container containerClass='page-product__size-box'>
              <IconBox
                icon={productSizeIcon(product, "large")}
                boxClass="page-product__icon"
              />
              <p className='page-product__info'>{productSize(product)}</p>
            </Container>

            <Container containerClass='page-product__add-box'>

              <p className='page-product__price'>{`${(product.price * quantity).toFixed(2)}₸`}</p>

              <ButtonCounter
                decrement={() => { quantity === 1 ? setQuantity(quantity) : setQuantity(quantity - 1) }}
                increment={() => setQuantity(quantity + 1)}
                quantity={quantity}
              />

              <Button onClick={() => addProduct(product, quantity)}>
                В корзину
                <IconBox
                  icon={basketIcon}
                  boxClass='page-product__icon page-product__icon_button'
                />
              </Button>

            </Container>

            <Container containerClass='page-product__price-box'>

              <IconBox
                icon={linkIcon}
                boxClass="page-product__icon page-product__icon_link"
              />

              <p className='page-product__info'>
                При покупке от <b>10 000₸</b> бесплатная доставка по Кокчетаву и области
              </p>

              <Button buttonClass='page-product__button'>
                Прайс-лист
                <IconBox
                  icon={priceIcon}
                  boxClass='page-product__icon page-product__icon_button'
                />
              </Button>

            </Container>

            <Container containerClass='page-product__property-box'>
              <List<string>
                list={productProperty.filter((item) => item.includes("Бренд") ||
                  item.includes("Страна") ||
                  item.includes("Артикул"))}
                renderItem={(item: string) =>
                  <ItemString
                    item={item}
                    itemClass="page-product__property-box__property"
                  />}
              />
            </Container>

            <Container containerClass='page-product__property-box page-product__property-box_description'>

              <Container containerClass='page-product__more-box'>
                <p className='page-product__property-box__subtitle'>Описание</p>

                <IconBox
                  icon={
                    visibile.description ?
                      lessIcon :
                      moreIcon
                  }
                  boxClass="page-product__property-box__icon"
                  onClick={() => setVisibile({ ...visibile, description: !visibile.description })}
                />
              </Container>

              <p
                className='page-product__property-box__property'
                hidden={!visibile.description}
              >
                {product.description}
              </p>
            </Container>

            <Container containerClass='page-product__border'></Container>

            <Container containerClass='page-product__property-box'>

              <Container containerClass='page-product__more-box'>

                <p className='page-product__property-box__subtitle'>Характеристики</p>

                <IconBox
                  icon={
                    visibile.properties ?
                      lessIcon :
                      moreIcon
                  }
                  boxClass="page-product__property-box__icon"
                  onClick={() => setVisibile({ ...visibile, properties: !visibile.properties })}
                />

              </Container>

              <Container
                containerClass='page-product__property-box__list'
                hidden={!visibile.properties}
              >
                <List<string>
                  list={productProperty}
                  renderItem={(item: string) =>
                    <ItemString
                      item={item}
                      itemClass="page-product__property-box__property"
                    />}
                />
              </Container>

            </Container>

          </Container>

        </Container>

      </Container>

    </div >);
}