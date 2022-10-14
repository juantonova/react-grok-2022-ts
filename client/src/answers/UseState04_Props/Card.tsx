import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({
  info,
  hide,
}: {
  info: { name: string; dateBirth: string };
  hide: () => void;
}): JSX.Element {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Name: {info.name}</h5>
        <p className="card-text">Date of Birth: {info.dateBirth}</p>
        <button type="button" className="btn btn-primary" onClick={hide}>
          Hide card
        </button>
      </div>
    </div>
  );
}

export default Card;
