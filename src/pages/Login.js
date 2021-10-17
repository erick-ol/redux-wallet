import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserEmail } from '../actions';
import validate from '../helper/validate';
import styles from './css/login.module.css';
import logoColorDown from '../image/logo-color-down.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setEnabled(validate(email, password));
  }, [password, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserEmail(email));
    history.push('/carteira');
  };

  return (
    <div className={ styles.login }>
      <section className={ styles.login_card }>
        <div className={ styles.login_content }>
          <img src={ logoColorDown } alt="logo-reduxwallet" />
          <form onSubmit={ (e) => handleSubmit(e) } className={ styles.form }>
            <input
              type="email"
              data-testid="email-input"
              placeholder="E-mail"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
            <input
              type="password"
              data-testid="password-input"
              placeholder="Senha"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
            <span>Esqueceu a senha?</span>
            <button type="submit" disabled={ !enabled }>
              Entrar ⇀
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
