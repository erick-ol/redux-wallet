import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

const SelectCoin = () => {
  const { request, data } = useFetch();

  useEffect(() => {
    request('https://economia.awesomeapi.com.br/json/all');
  }, [request]);

  return (
    <label htmlFor="coin">
      Moeda
      <select name="coin" id="coin">
        { data !== null
          && Object.keys(data)
            .filter((coin) => (coin !== 'USDT') && (coin !== 'DOGE'))
            .map((coin, index) => (
              <option key={ index }>{coin}</option>
            )) }
      </select>
    </label>
  );
};

export default SelectCoin;
