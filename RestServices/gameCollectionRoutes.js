'use strict'; 

module.exports = function(app){
    const gameCollection = require('./gameCollectionController');

    app.route('/games')
    .get(gameCollection.get_games)
    .post(gameCollection.add_game);

    app.route('/games/:gameIndex')
    .get(gameCollection.get_game)

    app.route('/games/delete/:gameID')
    .delete(gameCollection.delete_game)

    app.route('/games/search/:keyword')
    .get(gameCollection.search_game_by_keyword)
};