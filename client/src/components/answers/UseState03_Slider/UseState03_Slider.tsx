import React, { useState } from 'react';

function UseState03_Slider(): JSX.Element {
  const [value, setValue] = useState(12);

  return (
    <>
      <input
        className="range"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(Number(event.target.value))}
        type="range"
        name="months"
        min="0"
        max="120"
        defaultValue={value}
        step="12"
      />
      <label className="label" htmlFor="months">
        Months: {value}
      </label>
    </>
  );
}

export default UseState03_Slider;
