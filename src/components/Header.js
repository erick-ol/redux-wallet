import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ email, total = 0 }) => {
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    setTotalValue(total);
  }, [total]);

  return (
    <header>
      <span data-testid="email-field">{`E-mail: ${email}`}</span>
      <span data-testid="total-field">
        {`Total: ${totalValue}`}
      </span>
      <span data-testid="header-currency-field">Moeda: BRL</span>
    </header>
  );
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email, total: state.wallet.total });

export default connect(mapStateToProps)(Header);
