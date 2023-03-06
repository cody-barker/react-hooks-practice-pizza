import React from "react";
import PizzaList from "./PizzaList";

function PizzaForm({setFormTopping, formTopping, formSize, setFormSize, setVeg, veg, setPizzas, pizzas}) {

  function handleSize(e){
    setFormSize(e.target.value)
  }

  function handleTopping(e) {
    setFormTopping(e.target.value)
  }

  function handleVegetarian(e) {
    setVeg(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newPizza = {
      topping: formTopping,
      size: formSize,
      vegetarian: veg
    };
    fetch('http://localhost:3001/pizzas', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPizza)
    })
    .then(r => r.json())
    .then(pizza => setPizzas([...pizzas, pizza]))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input onChange={handleTopping}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formTopping}
          />
        </div>
        <div className="col">
          <select onChange={handleSize} className="form-control" name="size" value={formSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={veg ? true : false}
              value="Vegetarian"
              onClick={handleVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={veg ? false : true}
              value="Not Vegetarian"
              onClick={handleVegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
