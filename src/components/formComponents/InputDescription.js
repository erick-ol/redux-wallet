import React from 'react';

const InputDescription = () => {
  const description = 'Descrição';

  return (
    <label htmlFor="description">
      { description }
      <input type="text" id="description" />
    </label>
  );
};

export default InputDescription;
