// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CREATE_EXPENSE, SET_TOTAL, ERASE_EXPENSE, ERASE_TOTAL } from '../actions';

const initialState = { expenses: [], total: 0 };

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case CREATE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case SET_TOTAL:
    return { ...state, total: state.total + action.payload };
  case ERASE_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter((exp) => exp !== action.payload),
    });
  case ERASE_TOTAL:
    return { ...state, total: state.total - action.payload };
  default:
    return state;
  }
};

export default wallet;
