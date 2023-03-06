import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [formTopping, setFormTopping] = useState("")
  const [formSize, setFormSize] = useState("Small")
  const [veg, setVeg] = useState("")

  useEffect(() => {
    return(
      fetch('http://localhost:3001/pizzas')
      .then(r => r.json())
      .then(list => setPizzas(list))
    )
  },[])

  function editPizza(pizza){
    setFormTopping(pizza.topping)
    setFormSize(pizza.size)
    setVeg(pizza.vegetarian)
  }

  return (
    <>
      <Header />
      <PizzaForm pizzas={pizzas} setPizzas={setPizzas} veg={veg} setVeg={setVeg} formTopping={formTopping} setFormTopping={setFormTopping} formSize={formSize} setFormSize={setFormSize}/>
      <PizzaList pizzas={pizzas} editPizza={editPizza}/>
    </>
  );
}

export default App;


/**
 * App
 *   Header
 *   PizzaForm
 *   PizzaList
 *     Pizza
 */
