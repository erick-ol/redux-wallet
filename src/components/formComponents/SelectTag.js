import React from 'react';

const SelectTag = () => {
  const tag = 'Tag';

  return (
    <label htmlFor="tag">
      { tag }
      <select name="tag" id="tag">
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    </label>
  );
};

export default SelectTag;
