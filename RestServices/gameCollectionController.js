'use strict';
const { json } = require("express");
var fs = require("fs");


//Module.exports makes functions available for use by other files in the project, there are various ways of importing and exporting a module

module.exports.get_games = function (req, res) {

    //fs.readfile receives as a parameter the filename, the encoding and a callback function that stores an error if there was one and the data read.
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        console.log(err);
        console.log(data);
        res.end(data);
    });
};

module.exports.add_game = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const array = JSON.parse(data);
        console.log(err);
        console.log(data);
        const newGame = req.body;
        array.push(newGame);
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), 'utf8', function (err, data) {
            console.log(err);
            res.end(err);
        });
        res.end(JSON.stringify(array));
    });
};
module.exports.get_game = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const juegos = JSON.parse(data);
        const juego = juegos[req.params.gameIndex]
        console.log(juego);
        res.end(JSON.stringify(juego));
    });
};

//Deletes a game if the id parameter matches the id of a game inside the juegos.json file
module.exports.delete_game = function (req, res){
    fs.readFile(__dirname + '/' + "juegos.json", 'utf8', function (err, data){
        //Convert JSON data into an array
        const gameArray = JSON.parse(data); 
        //Storing the gameID parameter in a variable for added simplicity
        const gameIDToRemove = req.params.gameID; 
        // Access the id of each game and compare it against the provided parameter
        const filteredGameArray = gameArray.filter(game => game.id !== gameIDToRemove); 
        //Write changes to the game file
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(filteredGameArray), 'utf8', function (err, data) { 
            console.log(err);
            res.end(err);
        });
        res.end(JSON.stringify(filteredGameArray)); //Return the new game list without the game that was deleted
       
    });
};


// Returns a lists of games that contain a keyword on its name (case sensitive)
module.exports.search_game_by_keyword = function (req, res){
    fs.readFile(__dirname + '/' + "juegos.json", 'utf-8', function(err, data){
        const gameArray = JSON.parse(data)
        const keyword = req.params.keyword 
        //Compare each game name against the provided keyword, if the keyword is contained in the game name, add that game to the filtered array
        const filteredGameArray = gameArray.filter(game => game.nombre.includes(keyword)) 
        res.end(JSON.stringify(filteredGameArray))
    })
}

