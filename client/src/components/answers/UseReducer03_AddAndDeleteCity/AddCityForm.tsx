import React, { useState } from 'react';
import CityValues from './types/CityValues';

function AddCityForm({ addCity }: { addCity: (values: CityValues) => void }): JSX.Element {
  const [title, setTitle] = useState('');
  const [founded, setFounded] = useState(0);
  const [area, setArea] = useState(0);
  const [officialLanguage, setOfficialLanguage] = useState('');
  const [population, setPopulation] = useState(0);
  const [description, setDescription] = useState('');

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    addCity({
      title,
      founded,
      area,
      officialLanguage,
      population,
      description,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="row g-3 mb-5">
      <div className="col">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="city"
          required
          className="form-control"
          placeholder="Title"
        />
        <input
          value={founded}
          onChange={(e) => setFounded(Number(e.target.value))}
          type="number"
          name="founded"
          required
          className="form-control mt-1"
          placeholder="Founded"
        />
      </div>

      <div className="col">
        <input
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          type="number"
          name="area"
          required
          className="form-control"
          placeholder="Area"
        />
        <input
          value={officialLanguage}
          onChange={(e) => setOfficialLanguage(e.target.value)}
          type="text"
          name="officialLanguage"
          required
          className="form-control mt-1"
          placeholder="Official Language"
        />
      </div>

      <div className="col">
        <input
          value={population}
          onChange={(e) => setPopulation(Number(e.target.value))}
          type="number"
          name="population"
          required
          className="form-control"
          placeholder="Population"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          className="form-control mt-1"
          placeholder="Description"
        />
      </div>

      <button type="submit" className="btn btn-outline-success">
        Add City
      </button>
    </form>
  );
}

export default AddCityForm;
