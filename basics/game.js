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
    default: {
      return state;
    }
  }
};