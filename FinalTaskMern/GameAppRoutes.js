'use strict';

module.exports = function(app){
    const videogameCollection = require('./videoGameCollectionController')

    app.route('/games/getUserByEmail/:email')
    .get(videogameCollection.getUserByEmail)

    app.route('/games/addGameToUserCollection')
    .post(videogameCollection.addGameToUserCollection)

    app.route('/games/checkIfUserExists/:username')
    .get(videogameCollection.checkIfUserExists)

    app.route('/games/login')
    .post(videogameCollection.login)

    app.route('/games/getCollectionByUsername/:username')
    .get(videogameCollection.getCollectionByUsername)

    app.route('/games/getGameByUsernameAndGameName/:data')
    .get(videogameCollection.getGameByUsernameAndGameName)

    app.route('/games/getGameByUsernameAndGamePlatform/:data')
    .get(videogameCollection.getGameByUsernameAndGamePlatform)

    app.route('/games/AddLogEvent')
    .post(videogameCollection.AddLogEvent)

    app.route('/games/getLogsByUsername/:username')
    .get(videogameCollection.getLogsByUsername)

    app.route('/games/getLogsByUserAndKeyword/:data')
    .get(videogameCollection.getLogsByUserAndKeyword)

    app.route('/games/getLogsByDateRange/:data')
    .get(videogameCollection.getLogsByDateRange)
}