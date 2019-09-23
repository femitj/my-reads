const actionTypes = {
  EXAMPLE: 'EXAMPLE',
};

const actiontype = actionTypes;

const initialState = {
  example: 'null',
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.EXAMPLE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default example;
