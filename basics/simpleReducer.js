// A simple example of a reducer

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'incrementByAmount':
      return state + action.payload;
    default:
      return state;
  }
}

const action = {
  type: 'incrementByAmount',
  payload: 2 
};

// newState should be 3
const newState = reducer(1, action);