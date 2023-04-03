import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Container } from '../../Container';
import { IconBox } from '../../IconBox';
import { ImgBox } from '../../ImgBox';
import { Button } from '../../button/Button';
import { BreadCrumbs } from '../../breadCrumbs/BreadCrumbs';
import { ButtonCounter } from '../../buttonCounter/ButtonCounter';
import { NavLink } from 'react-router-dom';
import { IProduct } from '../../../types/types';
import { BasketActionTypes } from '../../../store/reducers/types';
import { productSize } from '../../../functions/productSize';
import { productSizeIcon } from '../../../functions/productSizeIcon';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './Basket.css'
import '../../../styles/styles.css'

const basketIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <path d="M20.3257 2.89296C20.1958 2.71151 20.0215 2.62079 19.8027 2.62079H5.87793L5.5 1.63689C5.4043 1.31431 5.27441 1.03877 5.11035 0.810279C4.94629 0.581784 4.77197 0.420494 4.5874 0.326408C4.40283 0.232322 4.24219 0.168478 4.10547 0.134876C3.96875 0.101274 3.83203 0.0844727 3.69531 0.0844727H0.885742C0.708008 0.0844727 0.557617 0.144957 0.43457 0.265924C0.311523 0.386892 0.25 0.541462 0.25 0.729634C0.25 0.837161 0.277344 0.941327 0.332031 1.04213C0.386719 1.14294 0.465332 1.22023 0.567871 1.27399C0.67041 1.32775 0.776367 1.35463 0.885742 1.35463H3.69531C3.75 1.35463 3.80127 1.36135 3.84912 1.3748C3.89697 1.38824 3.96191 1.44536 4.04395 1.54617C4.12598 1.64697 4.19434 1.79818 4.24902 1.9998L7.19043 10.0764C7.21777 10.1571 7.26221 10.2343 7.32373 10.3083C7.38525 10.3822 7.45703 10.4393 7.53906 10.4796C7.62109 10.52 7.70996 10.5401 7.80566 10.5401H16.665C16.8018 10.5401 16.9282 10.4998 17.0444 10.4191C17.1606 10.3385 17.2393 10.2377 17.2803 10.1167L20.418 3.48772C20.4863 3.27267 20.4556 3.07442 20.3257 2.89296ZM16.2139 9.24979H8.31836L6.22656 3.91111H18.8594L16.2139 9.24979ZM15.0312 11.2398C14.5801 11.2398 14.1938 11.3977 13.8726 11.7136C13.5513 12.0294 13.3906 12.4092 13.3906 12.8527C13.3906 13.2963 13.5513 13.676 13.8726 13.9918C14.1938 14.3077 14.5801 14.4656 15.0312 14.4656C15.4824 14.4656 15.8687 14.3077 16.1899 13.9918C16.5112 13.676 16.6719 13.2963 16.6719 12.8527C16.6719 12.4092 16.5112 12.0294 16.1899 11.7136C15.8687 11.3977 15.4824 11.2398 15.0312 11.2398ZM9.125 11.2398C8.82422 11.2398 8.54736 11.3137 8.29443 11.4616C8.0415 11.6094 7.84326 11.8043 7.69971 12.0463C7.55615 12.2882 7.48438 12.557 7.48438 12.8527C7.48438 13.2963 7.64502 13.676 7.96631 13.9918C8.2876 14.3077 8.67383 14.4656 9.125 14.4656C9.57617 14.4656 9.9624 14.3077 10.2837 13.9918C10.605 13.676 10.7656 13.2963 10.7656 12.8527C10.7656 12.7452 10.7554 12.6377 10.7349 12.5301C10.7144 12.4226 10.6836 12.3218 10.6426 12.2277C10.6016 12.1336 10.5503 12.0429 10.4888 11.9555C10.4272 11.8682 10.3589 11.7875 10.2837 11.7136C10.2085 11.6397 10.1265 11.5725 10.0376 11.512C9.94873 11.4515 9.85645 11.4011 9.76074 11.3608C9.66504 11.3204 9.5625 11.2902 9.45312 11.27C9.34375 11.2499 9.23438 11.2398 9.125 11.2398Z" fill="white" />
</svg>

const deleteIcon = <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.625 3.25H17.3125C17.5197 3.25 17.7184 3.33231 17.8649 3.47882C18.0114 3.62534 18.0938 3.82405 18.0938 4.03125C18.0938 4.23845 18.0114 4.43716 17.8649 4.58368C17.7184 4.73019 17.5197 4.8125 17.3125 4.8125H16.4484L15.2734 15.4C15.1673 16.3555 14.7125 17.2384 13.9961 17.8795C13.2797 18.5207 12.352 18.8751 11.3906 18.875H7.60938C6.64797 18.8751 5.72029 18.5207 5.00389 17.8795C4.28749 17.2384 3.8327 16.3555 3.72656 15.4L2.55 4.8125H1.6875C1.4803 4.8125 1.28159 4.73019 1.13507 4.58368C0.98856 4.43716 0.90625 4.23845 0.90625 4.03125C0.90625 3.82405 0.98856 3.62534 1.13507 3.47882C1.28159 3.33231 1.4803 3.25 1.6875 3.25H6.375C6.375 2.4212 6.70424 1.62634 7.29029 1.04029C7.87634 0.45424 8.6712 0.125 9.5 0.125C10.3288 0.125 11.1237 0.45424 11.7097 1.04029C12.2958 1.62634 12.625 2.4212 12.625 3.25ZM9.5 1.6875C9.0856 1.6875 8.68817 1.85212 8.39515 2.14515C8.10212 2.43817 7.9375 2.8356 7.9375 3.25H11.0625C11.0625 2.8356 10.8979 2.43817 10.6049 2.14515C10.3118 1.85212 9.9144 1.6875 9.5 1.6875ZM7.15625 7.9375V14.1875C7.15625 14.3947 7.23856 14.5934 7.38507 14.7399C7.53159 14.8864 7.7303 14.9688 7.9375 14.9688C8.1447 14.9688 8.34341 14.8864 8.48993 14.7399C8.63644 14.5934 8.71875 14.3947 8.71875 14.1875V7.9375C8.71875 7.7303 8.63644 7.53159 8.48993 7.38507C8.34341 7.23856 8.1447 7.15625 7.9375 7.15625C7.7303 7.15625 7.53159 7.23856 7.38507 7.38507C7.23856 7.53159 7.15625 7.7303 7.15625 7.9375ZM11.0625 7.15625C10.8553 7.15625 10.6566 7.23856 10.5101 7.38507C10.3636 7.53159 10.2812 7.7303 10.2812 7.9375V14.1875C10.2812 14.3947 10.3636 14.5934 10.5101 14.7399C10.6566 14.8864 10.8553 14.9688 11.0625 14.9688C11.2697 14.9688 11.4684 14.8864 11.6149 14.7399C11.7614 14.5934 11.8438 14.3947 11.8438 14.1875V7.9375C11.8438 7.7303 11.7614 7.53159 11.6149 7.38507C11.4684 7.23856 11.2697 7.15625 11.0625 7.15625Z" fill="white" />
</svg>


export const Basket = () => {
  const [orderProcessed, setOrder] = useState<boolean>(false);
  const busket = useTypedSelector(state => state.basket);
  const products = Array.from(busket.basket.values());
  const dispatch = useDispatch();

  const changeNumberProduct = (product: IProduct, diff: number): void => {
    dispatch({ type: BasketActionTypes.CHANGE_NUMBER_PRODUCT, payload: { product: product, quantity: diff } });
  }

  const deleteProduct = (vendorCode: number): void => {
    dispatch({ type: BasketActionTypes.DELETE_PRODUCT, payload: vendorCode });
  }

  if (orderProcessed)
    return (
      <div className='page-basket'>
        <Container containerClass='page-basket__container container'>
          <BreadCrumbs
            prev={[{ text: "Главная", link: "/" }]}
            page='Корзина'
          />
          <p className='page-basket__title page-basket__title_empty'>Спасибо за заказ</p>
        </Container>
      </div>
    )

  if (products.length === 0)
    return (
      <div className='page-basket'>
        <Container containerClass='page-basket__container container'>
          <BreadCrumbs
            prev={[{ text: "Главная", link: "/" }]}
            page='Корзина'
          />
          <p className='page-basket__title page-basket__title_empty'>Корзина пуста</p>
        </Container>
      </div>
    )

  return (
    <div className='page-basket'>

      <Container containerClass='page-basket__container container'>

        <BreadCrumbs
          prev={[{ text: "Главная", link: "/" }]}
          page='Корзина'
        />

        <Container containerClass='page-basket__row'>
          <p className='page-basket__title'>Корзина</p>
        </Container>

        {products.map(item =>

          <Container containerClass='page-basket__row'>

            <Container containerClass='page-basket__product-box'>

              <ImgBox
                imgSrc={item.product.url}
                boxClass="page-basket__product-box__img-box"
                imgClass="page-basket__product-box__img"
              />

              <Container containerClass='page-basket__product-data'>

                <Container containerClass='page-basket__box-row'>

                  <IconBox
                    icon={productSizeIcon(item.product, "small")}
                    boxClass="page-basket__icon"
                  />

                  <p className='page-basket__product-box__size'>{productSize(item.product)}</p>

                </Container>

                <NavLink to={`/catalog/${item.product.vendorCode}`}>
                  <p className="page-basket__product-box__name">{item.product.name}</p>
                  <p className="page-basket__product-box__description">{item.product.description}</p>
                </NavLink>

              </Container>

            </Container>

            <Container containerClass='page-basket__price-box'>

              <ButtonCounter
                decrement={() => changeNumberProduct(item.product, -1)}
                increment={() => changeNumberProduct(item.product, 1)}
                quantity={item.quantity}
              />

              <p className='page-basket__price'>{item.product.price}</p>

              <Button
                buttonClass='page-basket__button'
                onClick={() => deleteProduct(item.product.vendorCode)}
              >
                <IconBox
                  icon={deleteIcon}
                  boxClass='page-basket__icon'
                />
              </Button>

            </Container>

          </Container>

        )}

        <Container containerClass='page-basket__row page-basket__row_noline'>

          <Button
            onClick={() => setOrder(true)}
          >
            Оформить заказ
          </Button>

          <p className='page-basket__price'>
            {products.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)}
          </p>

        </Container>

      </Container>

    </div >);
}