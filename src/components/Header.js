import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ email, total }) => (
  <header>
    <span data-testid="email-field">{`E-mail: ${email}`}</span>
    <span data-testid="total-field">{ total }</span>
    <span data-testid="header-currency-field">Moeda: BRL</span>
  </header>
);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email, total: state.wallet.total });

export default connect(mapStateToProps)(Header);
