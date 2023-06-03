export const videogameReducer = (state, action) => {
    switch(action.type){
        case 'add': 
    
            return [...state, action.payload];

        
        case 'initializeCollection':
            return action.payload

        case 'delete':
            return state.filter(game => game.id !== action.payload)
        default:
            break;
    }
}