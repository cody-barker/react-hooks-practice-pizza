import React from "react";

function PizzaForm({setFormTopping, formTopping, formSize, setFormSize}) {

  //onClick, change select option to pizza.size

  function handleSize(e){
    setFormSize(e.target.value)
  }

  function handleTopping(e) {
    setFormTopping(e.target.value)
  }

  console.log(formSize)
  console.log(formTopping)

  return (
    <form onChange={handleTopping} onSubmit={null /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
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
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
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
