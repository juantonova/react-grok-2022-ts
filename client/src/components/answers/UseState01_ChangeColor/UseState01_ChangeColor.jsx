import React, { useState } from 'react';
import './UseState01_ChangeColor.css'

function UseState01_ChangeColor() {

  const [style, setStyle] = useState(false)

  return (
    <>
      <div className={style ? 'box box-active' : 'box box-unactive'}></div>
      <button className='btn' onClick={() => setStyle(true)}>Change color</button>
    </>
  );
}

export default UseState01_ChangeColor;