import React from 'react';
import InputValue from './formComponents/InputValue';
import InputDescription from './formComponents/InputDescription';
import SelectCoin from './formComponents/SelectCoin';
import SelectTag from './formComponents/SelectTag';
import SelectPayment from './formComponents/SelectPayment';

const AddExpense = () => {
  const aux = 'aux';
  console.log(aux);
  return (
    <form>
      <InputValue />
      <InputDescription />
      <SelectCoin />
      <SelectPayment />
      <SelectTag />
    </form>
  );
};

export default AddExpense;
