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
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days++,
      }
    }
    default: {
      return state;
    }
  }
};