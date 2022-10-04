import React, { useReducer, useCallback } from "react";
import Card from "./Card";
import style from './style.module.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_CARD': return {
      ...state,
      card: state.card === 2 ? 0 : state.card + 1,
    };

    case 'NEXT_BACKGROUND': return {
      ...state,
      background: state.background === 'bg-primary' ? 'bg-secondary' :
        state.background === 'bg-secondary' ? 'bg-success' :
          'bg-primary'
    };

    default:
      throw new Error('unexpected action type');
  }
};

const initialState = {
  card: 0,
  background: 'bg-primary'
};

function UseReducer01_Cards() {
  const [{ card, background }, dispatch] = useReducer(reducer, initialState);

  const nextCard = useCallback(() => dispatch({ type: 'NEXT_CARD' }));
  const nextBackground = useCallback(() => dispatch({ type: 'NEXT_BACKGROUND' }));

  return (
    <section className={style.wrap}>
      {card === 0 &&
        <Card backgroundClass={background} info={{ name: 'John Doe' }} />}
      {card === 1 &&
        <Card backgroundClass={background} info={{ name: 'Homer Simpson' }} />}
      {card === 2 &&
        <Card backgroundClass={background} info={{ name: 'Piter Parker' }} />}

      <div className="flex-column justify-content-between">
        <button type="button" className="btn btn-outline-primary m-2" id="next-card" onClick={nextCard}>Next card</button>
        <button type="button" className="btn btn-outline-primary m-2" id="next-bg" onClick={nextBackground}>Next background</button>
      </div>

    </section>
  )
}

export default UseReducer01_Cards;
