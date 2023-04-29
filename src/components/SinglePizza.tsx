import React, { FC, useState } from "react";

//components
import { EditPizzaForm } from "./EditPizzaForm";

//libs
import { Pizza } from "../models/Pizza";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

export const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {

  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    deletePizza(pizza.id);
  }

  return (
    <div className='pizza'>
      <img src={`/images/${pizza.img}`} alt='' />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} $</span>
      <div className='pizza-control'>
        <button onClick={handleToggleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      {edit
        ? <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={handleToggleEdit}
        />
        : null}

    </div>
  )
}