// reducers.js
const initialState = {
  isValuable: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        isValuable: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
