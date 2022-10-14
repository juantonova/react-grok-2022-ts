import React, { useState } from 'react';
import CityValues from './types/CityValues';

function AddCityForm({
  addCity,
}: {
  addCity: (values: CityValues) => void;
}): JSX.Element {
  const [title, setTitle] = useState('');
  const [founded, setFounded] = useState('');
  const [area, setArea] = useState('');
  const [officialLanguage, setOfficialLanguage] = useState('');
  const [population, setPopulation] = useState('');

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    addCity({
      title,
      founded: Number(founded),
      area: Number(area),
      officialLanguage,
      population: Number(population),
    });

    setTitle('');
    setFounded('');
    setArea('');
    setOfficialLanguage('');
    setPopulation('');
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
          onChange={(e) => setFounded(e.target.value)}
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
          onChange={(e) => setArea(e.target.value)}
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
          onChange={(e) => setPopulation(e.target.value)}
          type="number"
          name="population"
          required
          className="form-control"
          placeholder="Population"
        />
      </div>

      <button type="submit" className="btn btn-outline-success">
        Add City
      </button>
    </form>
  );
}

export default AddCityForm;
