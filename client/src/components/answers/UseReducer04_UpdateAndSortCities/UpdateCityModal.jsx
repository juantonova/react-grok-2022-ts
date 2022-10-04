import React from 'react';

function UpdateCityModal({ state, dispatch }) {

  const cityId = state.updateModal.payload;
  const currentCity = state.cities.find(city => city.id === Number(cityId))

  const updateCity = (event) => {
    event.preventDefault();

    const { title, founded, area, officialLanguage, population, description } = event.target;

    const updatedCity = {
      title: title.value,
      founded: founded.value,
      area: area.value,
      officialLanguage: officialLanguage.value,
      population: population.value,
      description: description.value
    }

    fetch(`${process.env.REACT_APP_URL}/cities/${cityId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(updatedCity)
    })
      .then(res => res.json())
      .then(payload => {
        dispatch({ type: 'UPDATE_CITY', payload })
        dispatch({ type: 'HIDE_UPDATE_MODAL' })
      })
  }

  return (

    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Updating a city</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dispatch({ type: 'HIDE_UPDATE_MODAL' })}></button>
          </div>

          <div className="modal-body">
            <p>Are you sure you want to update the city?</p>
          </div>

          <form onSubmit={updateCity} className="row g-3 m-1">

            <div className="col">
              <input type="text" name="title" required className="form-control" placeholder="Title" defaultValue={currentCity.title} />
              <input type="number" name="founded" required className="form-control mt-1" placeholder="Founded" defaultValue={currentCity.founded} />
            </div>

            <div className="col">
              <input type="number" name="area" required className="form-control" placeholder="Area" defaultValue={currentCity.area} />
              <input type="text" name="officialLanguage" required className="form-control mt-1" placeholder="Official Language" defaultValue={currentCity.officialLanguage} />
            </div>

            <div className="col">
              <input type="number" name="population" required className="form-control" placeholder="Population" defaultValue={currentCity.population} />
              <input type="text" name="description" className="form-control mt-1" placeholder="Description" defaultValue={currentCity.description} />
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Update</button>
              <button onClick={() => dispatch({ type: 'HIDE_UPDATE_MODAL' })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>

          </form>
        </div>
      </div>
    </div >
  );
}

export default UpdateCityModal;