import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ProductForm } from './ProductForm';

describe("Форма добавления товара", () => {

  test("Раскрытие списка категорий", () => {
    render(<ProductForm />);
    expect(screen.getByTestId("listCategories")).not.toBeVisible();
    const buttonCategories = screen.getAllByRole("button");
    fireEvent.click(buttonCategories[0]);
    expect(screen.getByTestId("listCategories")).toBeVisible();
    fireEvent.click(buttonCategories[0]);
    expect(screen.getByTestId("listCategories")).not.toBeVisible();
  });

  test("Добавление и удаление категорий", () => {
    render(<ProductForm />);
    const buttonCategories = screen.getAllByRole("button");
    const buttonFace = screen.getByText("Уход за лицом");
    const buttonHand = screen.getByText("Уход за руками");
    const buttonBody = screen.getByText("Уход за телом");
    const inputCategories = screen.getByPlaceholderText("Категория");
    fireEvent.click(buttonCategories[0]);
    fireEvent.click(buttonFace);
    fireEvent.click(buttonHand);
    expect(inputCategories).toHaveValue("Уход за лицом, Уход за руками");
    fireEvent.click(buttonHand);
    fireEvent.click(buttonBody);
    expect(inputCategories).toHaveValue("Уход за лицом, Уход за телом");
  })
});