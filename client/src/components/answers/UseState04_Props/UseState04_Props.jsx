import React, { useState } from 'react';
import Card from './Card';

function UseState04_Props() {

  const [visible, setVisible] = useState(true)

  const info = {
    name: 'Linus Torvalds',
    dateBirth: '28.12.1969'
  }

  return (
    <>
      {visible && <Card info={info} setVisible={setVisible} />}
    </>
  );
}

export default UseState04_Props;