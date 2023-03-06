import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas}) {
  
  const pizzaComps = pizzas.map(pizza => <Pizza pizza={pizza} key={pizza.id}/>)
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaComps}
      </tbody>
    </table>
  );
}

export default PizzaList;
