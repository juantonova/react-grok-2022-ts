import React, { useState } from 'react';
import Modal from './Modal';
import './UseState05_Modal.css';

function UseState05_Modal(): JSX.Element {
  const [visible, setVisible] = useState(false);

  const hide = (): void => {
    setVisible(false);
  };

  return (
    <section className="main">
      {visible ? (
        <Modal hide={hide} />
      ) : (
        <button type="button" className="btn btn-success" onClick={() => setVisible(true)}>
          Open Modal
        </button>
      )}
    </section>
  );
}

export default UseState05_Modal;
