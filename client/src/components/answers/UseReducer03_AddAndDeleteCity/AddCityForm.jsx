import React from 'react';

function AddCityForm({ dispatch }) {

  const addCity = (event) => {
    event.preventDefault();

    const { title, founded, area, officialLanguage, population, description } = event.target;

    const newCity = {
      title: title.value,
      founded: founded.value,
      area: area.value,
      officialLanguage: officialLanguage.value,
      population: population.value,
      description: description.value
    }

    fetch(`${process.env.REACT_APP_URL}/cities`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(newCity)
    })
      .then(res => res.json())
      .then(payload => dispatch({ type: 'ADD_CITY', payload }))
  }

  return (
    <form onSubmit={addCity} className="row g-3 mb-5">

      <div className="col">
        <input type="text" name="title" required className="form-control" placeholder="Title" />
        <input type="number" name="founded" required className="form-control mt-1" placeholder="Founded" />
      </div>

      <div className="col">
        <input type="number" name="area" required className="form-control" placeholder="Area" />
        <input type="text" name="officialLanguage" required className="form-control mt-1" placeholder="Official Language" />
      </div>

      <div className="col">
        <input type="number" name="population" required className="form-control" placeholder="Population" />
        <input type="text" name="description" className="form-control mt-1" placeholder="Description" />
      </div>

      <button type="submit" className="btn btn-outline-success">Add City</button>
    </form>
  );
}

export default AddCityForm;