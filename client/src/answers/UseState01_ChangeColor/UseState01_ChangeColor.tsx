import React, { useState } from 'react';
import './UseState01_ChangeColor.css';

function UseState01_ChangeColor(): JSX.Element {
  const [style, setStyle] = useState(false);

  return (
    <>
      <div className={style ? 'box box-active' : 'box box-unactive'} />
      <button type="button" className="btn" onClick={() => setStyle((prev) => !prev)}>
        Change color
      </button>
    </>
  );
}

export default UseState01_ChangeColor;
