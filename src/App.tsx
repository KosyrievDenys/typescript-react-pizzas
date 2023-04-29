import React, { FC, useState } from 'react';

//components
import { AddPizzaForm } from './components/AddPizzaForm';
import { DisplayPizzas } from "./components/DisplayPizzas";

//libs
import { Pizza } from './models/Pizza';

//assets
import './App.css';

// type Order = {
//   title: string,
//   quantity?: number,
// }
//
// const order: Order = {title: 'margarite', quantity: 10};
//
// const orders: Order[] = [
//   {title: 'margarita'},
//   {title: 'salami', quantity: 10},
// ];
//
// let number: null | number = null;
//
// number = 10;


// let pizza: string = 'Salami';
// let price: number = 20;
// let atStock: boolean = true;
//
// let pizzas: string[] = ['Salami', 'Saussage'];
// let numbers: number[] = [1, 2, 3];


// type PrintTitle = (title: string) => told;
// type PrintTitle = (title: string) => never;
// type PrintTitle = (title: string) => string;
//
// const printTitle: PrintTitle = (title) => {
//   return title;
// }
//
// printTitle('salami');


// const test: unknown = 'test';
//
// console.log(test);


// type Order = {
//   title: string,
//   quantity?: number
// }
//
// interface MyOrder {
//   title: string,
//   quantity?: number
// }
//
// type X = {
//   a: string,
//   b: number
// }
//
// type Y = X & {
//   c: string,
//   d: number
// }
//
// interface Auto {
//   country: string
// }
//
// interface BMW extends Auto {
//   model: string,
//   year: number
// }
//
// const bmw: BMW = {
//   model: '5',
//   year: 2023,
//   country: 'German'
// }


// type X2 = {
//   a: string,
//   b: number
// }
//
// interface BMW extends  X {
//   model: string,
//   year: number
// }
// OR
// type X = BMW & {
// a: string,
// b: number
// }


const App: FC = () => {

  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) =>
      (pizza.id === newPizza.id ? newPizza : pizza)));
  }

  const deletePizza = (id: number) => {

    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPizzasList);
  }

  console.log('pizzaList >>>>', pizzasList);

  return (
    <div className='App'>
      <div className='wrap'>
        <span className='heading'>Our pizzeria</span>
        <AddPizzaForm
          addPizza={addPizza}
        />
        <DisplayPizzas
          pizzasList={pizzasList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        />
      </div>
    </div>
  )
}

export default App;
