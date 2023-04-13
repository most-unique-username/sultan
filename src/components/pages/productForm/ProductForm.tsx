import { useState, MouseEvent } from 'react';
import { Container } from '../../Container';
import { BreadCrumbs } from '../../breadCrumbs/BreadCrumbs';
import { List } from '../../List';
import { Button } from '../../button/Button';
import { Input } from '../../input/Input';
import { IProduct } from '../../../types/types';
import './ProductForm.css'
import '../../../styles/styles.css'
import { ItemString } from '../../ItemString';
import { ProductBoxForm } from '../../ProductBoxForm';
import { InputButton } from '../../inputButton/InputButton';
import { getProductsLocalStorage } from '../../../functions/getProductsLocalStorage';

const inputIcon = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
  <path d="M0 12.8571L5 7.5L0 2.14286L1 0L8 7.5L1 15L0 12.8571Z" fill="white" />
</svg>

const editIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
  <line x1="16" y1="5" x2="19" y2="8" />
</svg>

const deletetIcon = <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.625 3.25H17.3125C17.5197 3.25 17.7184 3.33231 17.8649 3.47882C18.0114 3.62534 18.0938 3.82405 18.0938 4.03125C18.0938 4.23845 18.0114 4.43716 17.8649 4.58368C17.7184 4.73019 17.5197 4.8125 17.3125 4.8125H16.4484L15.2734 15.4C15.1673 16.3555 14.7125 17.2384 13.9961 17.8795C13.2797 18.5207 12.352 18.8751 11.3906 18.875H7.60938C6.64797 18.8751 5.72029 18.5207 5.00389 17.8795C4.28749 17.2384 3.8327 16.3555 3.72656 15.4L2.55 4.8125H1.6875C1.4803 4.8125 1.28159 4.73019 1.13507 4.58368C0.98856 4.43716 0.90625 4.23845 0.90625 4.03125C0.90625 3.82405 0.98856 3.62534 1.13507 3.47882C1.28159 3.33231 1.4803 3.25 1.6875 3.25H6.375C6.375 2.4212 6.70424 1.62634 7.29029 1.04029C7.87634 0.45424 8.6712 0.125 9.5 0.125C10.3288 0.125 11.1237 0.45424 11.7097 1.04029C12.2958 1.62634 12.625 2.4212 12.625 3.25ZM9.5 1.6875C9.0856 1.6875 8.68817 1.85212 8.39515 2.14515C8.10212 2.43817 7.9375 2.8356 7.9375 3.25H11.0625C11.0625 2.8356 10.8979 2.43817 10.6049 2.14515C10.3118 1.85212 9.9144 1.6875 9.5 1.6875ZM7.15625 7.9375V14.1875C7.15625 14.3947 7.23856 14.5934 7.38507 14.7399C7.53159 14.8864 7.7303 14.9688 7.9375 14.9688C8.1447 14.9688 8.34341 14.8864 8.48993 14.7399C8.63644 14.5934 8.71875 14.3947 8.71875 14.1875V7.9375C8.71875 7.7303 8.63644 7.53159 8.48993 7.38507C8.34341 7.23856 8.1447 7.15625 7.9375 7.15625C7.7303 7.15625 7.53159 7.23856 7.38507 7.38507C7.23856 7.53159 7.15625 7.7303 7.15625 7.9375ZM11.0625 7.15625C10.8553 7.15625 10.6566 7.23856 10.5101 7.38507C10.3636 7.53159 10.2812 7.7303 10.2812 7.9375V14.1875C10.2812 14.3947 10.3636 14.5934 10.5101 14.7399C10.6566 14.8864 10.8553 14.9688 11.0625 14.9688C11.2697 14.9688 11.4684 14.8864 11.6149 14.7399C11.7614 14.5934 11.8438 14.3947 11.8438 14.1875V7.9375C11.8438 7.7303 11.7614 7.53159 11.6149 7.38507C11.4684 7.23856 11.2697 7.15625 11.0625 7.15625Z" fill="white" />
</svg>

type Visibile = {
  categories: boolean;
  sizeTypes: boolean;
}

export const ProductForm = () => {

  const defaultProduct: IProduct = {
    vendorCode: NaN,
    name: "",
    description: "",
    price: NaN,
    url: "",
    category: [],
    brand: "",
    country: "",
    sizeType: "",
    size: NaN
  };

  const categories: string[] = ["Парфюм", "Уход за лицом", "Уход за руками", "Уход за телом"];
  const sizeTypes: string[] = ["Вес", "Объем"];

  const defaultVisibile: Visibile = {
    categories: false,
    sizeTypes: false
  };

  const iconClass = 'page-product-form__icon';
  const iconClassDown = iconClass + ' page-product-form__icon_down';
  const iconClassUp = iconClass + ' page-product-form__icon_up';

  const [buttonName, setButtonName] = useState<string>("Добавить");
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [categoriesChecked, setCategoriesChecked] = useState<string[]>([]);
  const [sizeTypeChecked, setSizeTypeChecked] = useState<string>("");
  const [visibile, setVisibile] = useState<Visibile>(defaultVisibile);
  const [redraw, setRedraw] = useState<boolean>(false);

  const updateProduct = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof IProduct): void => {
    let fieldValue: number | string = event.target.value;

    if (fieldName === "vendorCode" || fieldName === "price" || fieldName === "size")
      fieldValue = +fieldValue;

    if (fieldName === "category")
      fieldValue = fieldValue;

    setProduct(prevProduct => ({
      ...prevProduct,
      [fieldName]: fieldValue,
    }))
  }

  const addProduct = (event: MouseEvent<HTMLButtonElement>): void => {
    if (
      categoriesChecked.length === 0 || sizeTypeChecked === "" ||
      product.brand === "" || product.country === "" || product.name === "" ||
      Number.isNaN(product.price) || Number.isNaN(product.size) || Number.isNaN(product.vendorCode)
    ) {
      event.preventDefault();
      return;
    }

    product.category = categoriesChecked;
    product.sizeType = sizeTypeChecked;
    localStorage.setItem(product.vendorCode.toString(), JSON.stringify(product));

    setProduct(defaultProduct);
    setCategoriesChecked([]);
    setSizeTypeChecked("");
    setVisibile(defaultVisibile);
    setButtonName("Добавить");
  }

  return (
    <div className='page-product-form'>

      <Container containerClass='page-product-form__container container'>

        <Container containerClass='page-product-form__row'>

          <Container containerClass='page-product-form__col'>

            <form
              action=""
              className='page-product-form__form'
              name="product-form"
            >

              <fieldset className='page-product-form__form-fieldset'>
                <Input
                  inputClass='page-product-form__input'
                  placeholder='Артикул'
                  onChange={event => updateProduct(event, "vendorCode")}
                  required={true}
                  readOnly={buttonName === "Обновить"}
                  type="number"
                  value={product.vendorCode.toString()}
                />
                <Input
                  inputClass='page-product-form__input'
                  placeholder='Название'
                  onChange={event => updateProduct(event, "name")}
                  required={true}
                  value={product.name.toString()}
                />
              </fieldset>

              <fieldset className='page-product-form__form-fieldset'>

                <Container containerClass="page-product-form__select-box">
                  <InputButton
                    boxClass='page-product-form__input_relative'
                    placeholder='Категория'
                    icon={inputIcon}
                    iconClass={visibile.categories ? iconClassDown : iconClassUp}
                    onClick={() => setVisibile(() => ({ ...visibile, categories: !visibile.categories }))}
                    required={true}
                    readOnly={true}
                    value={categoriesChecked.join(", ")}
                  />

                  <Container
                    testId="listCategories"
                    containerClass="page-product-form__list"
                    hidden={!visibile.categories}
                  >
                    <List<string>
                      list={categories}
                      renderItem={item =>
                        <ItemString
                          item={item}
                          itemClass={
                            categoriesChecked.includes(item) ?
                              "page-product-form__option page-product-form__option_checked" :
                              "page-product-form__option"
                          }
                          onClick={() => {
                            categoriesChecked.includes(item) ?
                              setCategoriesChecked(categoriesChecked.filter(checkedItem => item !== checkedItem)) :
                              setCategoriesChecked([...categoriesChecked, item]);
                          }}
                        />}
                    />
                  </Container>

                </Container>

                <Input
                  inputClass='page-product-form__input'
                  placeholder='Цена'
                  onChange={event => updateProduct(event, "price")}
                  required={true}
                  type="number"
                  value={product.price.toString()}
                />
              </fieldset>

              <fieldset className='page-product-form__form-fieldset'>
                <Input
                  inputClass='page-product-form__input'
                  placeholder='Бренд'
                  onChange={event => updateProduct(event, "brand")}
                  required={true}
                  value={product.brand.toString()}
                />
                <Input
                  inputClass='page-product-form__input'
                  placeholder='Страна-производитель'
                  onChange={event => updateProduct(event, "country")}
                  required={true}
                  value={product.country.toString()}
                />
              </fieldset>

              <fieldset className='page-product-form__form-fieldset'>

                <Container containerClass="page-product-form__select-box">
                  <InputButton
                    boxClass='page-product-form__input_relative-bottom'
                    placeholder='Тип размера'
                    icon={inputIcon}
                    iconClass={visibile.sizeTypes ? iconClassDown : iconClassUp}
                    onClick={() => setVisibile(() => ({ ...visibile, sizeTypes: !visibile.sizeTypes }))}
                    required={true}
                    value={sizeTypeChecked}
                  />

                  <Container
                    containerClass="page-product-form__list page-product-form__list_bottom"
                    hidden={!visibile.sizeTypes}
                  >
                    <List<string>
                      list={sizeTypes}
                      renderItem={item =>
                        <ItemString
                          item={item}
                          itemClass={
                            item === sizeTypeChecked ?
                              "page-product-form__option page-product-form__option_checked" :
                              "page-product-form__option"
                          }
                          onClick={() => setSizeTypeChecked(item)}
                        />}
                    />
                  </Container>

                </Container>

                <Input
                  inputClass='page-product-form__input'
                  placeholder='Размер'
                  onChange={event => updateProduct(event, "size")}
                  required={true}
                  type="number"
                  value={product.size.toString()}
                />
              </fieldset>

              <textarea
                className='input page-product-form__textarea'
                placeholder='Описание'
                onChange={event => updateProduct(event, "description")}
                value={product.description.toString()}
              />
              <Button
                buttonClass='page-product-form__button'
                onClick={event => addProduct(event)}
                type='reset'
              >
                {buttonName}
              </Button>
            </form>

          </Container>

          <Container containerClass='page-product-form__col'>

            {getProductsLocalStorage().map(item =>
              <ProductBoxForm
                product={item}
                boxClass='page-product-form__product-box'
                boxImgClass='page-product-form__img-box'
                imgClass='page-product-form__img'
                productboxClass='page-product-form__product-data'
                nameClass='page-product-form__product-name'
                propertyClass='page-product-form__product-property'
              >
                <Button
                  buttonClass="page-product-form__button-edit"
                  onClick={() => {
                    setProduct(item);
                    setButtonName("Обновить");
                    setCategoriesChecked(item.category);
                    setSizeTypeChecked(item.sizeType);
                  }}
                >
                  {editIcon}
                </Button>

                <Button
                  buttonClass="page-product-form__button-delete"
                  onClick={() => {
                    localStorage.removeItem(item.vendorCode.toString());
                    setRedraw(!redraw);
                  }}
                >
                  {deletetIcon}
                </Button>

              </ProductBoxForm>
            )}
          </Container>

        </Container>

      </Container>

    </div >
  );
}