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
      days: state.days + 1
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
        days: state.days + 1,
      }
    }
    default: {
      return state;
    }
  }
};

let wagon = gameReducer(undefined, {});
console.log(wagon);

// First day of traveling

wagon = gameReducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

// Second day gathering supplies

wagon = gameReducer(wagon, {type: 'gather'});
console.log(wagon);

// Third day we tip over

wagon = gameReducer(wagon, {type: 'tippedWagon'});
console.log(wagon);