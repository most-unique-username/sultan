import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ProductForm } from './components/pages/productForm/ProductForm';
import { Catalog } from './components/pages/catalog/Catalog';
import { Product } from './components/pages/product/Product';
import { Basket } from './components/pages/basket/Basket';
import { store } from './store/index';
import './index.css'

let rootElement = document.getElementById('root');
if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.className = "page-body";
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/sultan'} element={<ProductForm />} />
        <Route path={'/catalog'} element={<Catalog />} />
        <Route path={'/basket'} element={<Basket />} />
        <Route path={'/catalog/:code'} element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
);