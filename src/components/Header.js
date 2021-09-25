import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ email }) => (
  <header>
    <span data-testid="email-field">{`E-mail: ${email}`}</span>
    <span data-testid="total-field">0</span>
    <span data-testid="header-currency-field">Moeda: BRL</span>
  </header>
);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps)(Header);
