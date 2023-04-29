import React, { FC, ChangeEvent, FormEvent, useState } from "react";

//assets
import './style.css';

//libs
import { Pizza } from "../models/Pizza";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

export const EditPizzaForm: FC<EditPizzaFormProps> =
  ({ data, updatePizza, handleToggleEdit }) => {
  const [editPizza, setEditPizza] =
    useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({
      ...editPizza,
      [name]: value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza)
      handleToggleEdit();
    }
  }

  return (
    <form onSubmit={handleSubmit} className='edit-form'>
      <input
        name='title'
        type='text'
        placeholder={'Hазва'}
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name='price'
        type='text'
        placeholder={'Ціна'}
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name='img'
        type='text'
        placeholder={'Зображення'}
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type='submit'>
        Підтвердити
      </button>
    </form>
  )
}