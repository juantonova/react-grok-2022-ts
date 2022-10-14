import React, { useState } from 'react';
import './UseState02_Toggle.css';

function UseState02_Toggle(): JSX.Element {
  const [css, setCss] = useState(false);

  return (
    <div
      className={css ? 'circle circle-active' : 'circle circle-unactive'}
      onClick={() => setCss((prevState) => !prevState)}
    />
  );
}

export default UseState02_Toggle;
