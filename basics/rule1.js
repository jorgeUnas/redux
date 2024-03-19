//Reducers should only calculate the new state value based on the state and action arguments.


const globalSong = 'We are the World';

export const playlistReducer = (state = [], action) => {
 switch (action.type) {
   case 'songs/addGlobalSong': {
     //return [...state, globalSong];
     return [...state, action.payload];
   }
   default:
     return state;
 }
}