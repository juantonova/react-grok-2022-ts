import React, { useState } from 'react';
import Card from './Card';

function UseState04_Props(): JSX.Element {
  const [visible, setVisible] = useState(true);

  const hide = (): void => {
    setVisible(false);
  };

  const info = {
    name: 'Linus Torvalds',
    dateBirth: '28.12.1969',
  };

  return visible ? <Card info={info} hide={hide} /> : <div />;
}

export default UseState04_Props;
