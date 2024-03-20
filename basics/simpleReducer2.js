const reducer = (state = [], action) => {
  switch (action.type) {
    case 'addPhrase':
      return [...state, action.payload];
    default:
      return state;
  }
}

const action = {
  type: 'addPhrase',
  payload: 'fast' 
};

// newState should be ['gotta', 'go', 'fast']
const newState = reducer(['gotta', 'go'], action);