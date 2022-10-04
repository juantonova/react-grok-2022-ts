import React, { useState } from 'react';
import Modal from './Modal';
import './UseState05_Modal.css'

function UseState05_Modal() {

  const [visible, setVisible] = useState(false)

  return (
    <section className='main'>
      {visible ? <Modal setVisible={setVisible} /> : <button type="button" class="btn btn-success" onClick={() => setVisible(true)}>Open Modal</button>}

    </section>
  );
}

export default UseState05_Modal;