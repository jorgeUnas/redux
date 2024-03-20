const initialState = {
   isLate: false,
   ETA: '11:00',
   destination: 'Mars'
};

const arrivalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setToLate': {
      return {
        ...state, 
        isLate: true
      };
    }
    default:
      return state;
  }
}