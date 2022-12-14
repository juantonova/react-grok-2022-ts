import React, { useState } from 'react';
import CityValues from './types/CityValues';

function UpdateCityModal({
  id,
  updateCity,
  hideUpdateModal,
}: {
  id: number;
  updateCity: (city: CityValues, id: number) => void;
  hideUpdateModal: () => void;
}): JSX.Element {
  const [title, setTitle] = useState('');
  const [founded, setFounded] = useState('');
  const [area, setArea] = useState('');
  const [officialLanguage, setOfficialLanguage] = useState('');
  const [population, setPopulation] = useState('');

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    updateCity(
      {
        title,
        founded: Number(founded),
        area: Number(area),
        officialLanguage,
        population: Number(population),
      },
      id
    );

    setTitle('');
    setFounded('');
    setArea('');
    setOfficialLanguage('');
    setPopulation('');
  }

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Updating a city</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={hideUpdateModal}
            />
          </div>

          <div className="modal-body">
            <p>Are you sure you want to update the city?</p>
          </div>

          <form onSubmit={handleSubmit} className="row g-3 m-1">
            <div className="col">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="city"
                required
                className="form-control"
                placeholder="Title"
              />
              <input
                type="number"
                value={founded}
                onChange={(e) => setFounded(e.target.value)}
                name="founded"
                required
                className="form-control mt-1"
                placeholder="Founded"
              />
            </div>

            <div className="col">
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                name="area"
                required
                className="form-control"
                placeholder="Area"
              />
              <input
                type="text"
                value={officialLanguage}
                onChange={(e) => setOfficialLanguage(e.target.value)}
                name="officialLanguage"
                required
                className="form-control mt-1"
                placeholder="Official Language"
              />
            </div>

            <div className="col">
              <input
                type="number"
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
                name="population"
                required
                className="form-control"
                placeholder="Population"
              />
            </div>

            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Update
              </button>
              <button
                onClick={hideUpdateModal}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCityModal;
