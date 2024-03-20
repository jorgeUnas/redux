const initialWagonState = {
  supplies: 100,
distance: 0,
days: 0
}

const gameReducer = (state = initialWagonState, action) => {
  switch (action.type){
    case 'gather': {
      return {
      ...state,
      supplies: (state.supplies + 15),
      days: state.days++
      };
    }
    case 'travel': {
      return {
        ...state,
        supplies: state.supplies - 20 * action.payload,
        distance: state.distance + 10 * action.payload,
        days: action.payload,
      }
    }
    default: {
      return state;
    }
  }
};