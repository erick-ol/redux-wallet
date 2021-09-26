import React from 'react';

const SelectPayment = () => {
  const payment = 'Método de Pagamento';

  return (
    <label htmlFor="payment">
      { payment }
      <select name="payment" id="payment">
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de Crédito">Cartão de Crédito</option>
        <option value="Cartão de Débito">Cartão de Débito</option>
      </select>
    </label>
  );
};

export default SelectPayment;
