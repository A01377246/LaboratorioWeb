
export const getGamesBySearch = (criterion = "", gameCollection) => {
    if (criterion === ''){
        return [];
    }
    return gameCollection.filter(game => game.name.toLowerCase().includes(criterion.toLowerCase()));
}