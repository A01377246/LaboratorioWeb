export const videogameReducer = (state = [], action) => {
    switch(action.type){
        case 'add': 
           if(state.includes(action.payload.id)){
                state[action].name = action.payload.name
                state[action].image = action.payload.image
                state[action].rating = action.payload.rating
            }
            
            return [...state, action.payload];

        case 'delete':
            return state.filter(game => game.id !== action.payload)
        default:
            break;
    }
}