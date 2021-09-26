import React from 'react';

const InputValue = () => {
  const valor = 'Valor';

  return (
    <label htmlFor="value">
      { valor }
      <input type="text" id="value" />
    </label>
  );
};

export default InputValue;
