import React from 'react';

const AddExpense = () => {
  return (
    <form>
      <label htmlFor="value">
        Valor
        <input
          type="text"
          id="value"
        />
      </label>
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
        />
      </label>
      <label htmlFor="coin">
        Moeda
        <select name="coin" id="coin">
          <option value="aux">aux</option>
        </select>
      </label>
      <label htmlFor="payment">
        Método de pagamento
        <select name="payment" id="payment">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Cartão de Débito">Cartão de Débito</option>
        </select>
      </label>
      <label htmlFor="category">
        Tag
        <select name="category" id="category">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    </form>
  );
};

export default AddExpense;
