
const fs = require('fs');

db.user.drop();
db.log.drop(); 

db.createCollection("user");
db.createCollection("log"); 



const imageNameArray = ["Profile_Guy.webp","Profile_Jiraiya.webp","Profile_Rocky.webp","Profile_AllMight.jpg","Profile_Tengen.jpg"];
const nameArray = ["Might Guy", "Jiraiya", "Rocky Balboa", "Toshinori Yagi" , "Tengen Uzui"];
const usernameArray = ["_BlueBeast", "_PervertSage", "_Italian Stallion", "_AllMight", "_SoundHashira"];
const passwordArray = ["KonohaLee27", "TheChildOfProphecy12", "Mickey3333", "PlusUltra16", "MusicalScore25"];
const registerDateArray = [ISODate("2000-06-03"), ISODate("2003-05-25"), ISODate("2008-10-08"), ISODate("2007-08-31"),ISODate("2018-06-08")]; //Dates stored using ISO date
const emailArray = ["BlueBeastOfKonoha@konoha.com","ichaichaParadise@konoha.com", "balboa17@mickeysgym.com", "allMight@UAhigh.com", "tengen@demonSlayerCorps.com"];
const GameCollectionArray =[[{"_Game_id": 57, "game_name": "Metal Gear Solid Snake Eater", "platform": "Xbox", "comments": "Kept you waiting, huh?"}, {"_Game_id": 117, "game_name": "Halo 3", "platform": "Xbox", "comments": "Finish the fight"}, {"_Game_id": 31, "game_name": "Lugi's Mansion 3", "platform": "Nintendo Switch", "comments": "Polter Pup is so cool"}, {"_Game_id": 2500, "game_name": "Street Fighter II", "platform": "Nintendo SNES", "comments": "Sonic Boom!"}, {"_Game_id": 18, "game_name": "Gears of War 3", "platform": "Xbox", "comments": "Berserkeeeer!"}],
[{"_Game_id:":1, "game_name": "The Legend Of Zelda Tears Of the Kingdom", "platform": "Nintendo Switch", "comments": "He will be our last line of defense"}, {"_Game_id:": 277, "game_name": "The Legend Of Zelda Twilight Princess", "platform": "Nintendo Gamecube", "comments": "Is the Shade of the Hero the hero of time?"}, {"_Game_id:":981, "game_name": "Splatoon 3", "platform": "Nintendo Switch", "comments": "Are you a boy or a squid?"}, {"_Game_id:":777, "game_name": "Minecraft", "platform": "PC", "comments": "Gonna create some Tsunade pixel art"},{"_Game_id:":95, "game_name": "Assassin's Creed II", "platform": "Xbox", "comments": "Requiescat in Pace"}], 
[{"_Game_id:":33, "game_name": "Sonic The Hedgehog (2006)", "platform": "Xbox", "comments": "Underrated Sonic Game"}, {"_Game_id:": 1980, "game_name": "Assassin's Creed Revelations", "platform": "Xbox", "comments": "Best AC game!"},{"_Game_id:":47, "game_name": "Star Wars: The Old Republic", "platform": "PC", "comments": "So many possibilities!"},{"_Game_id:":42, "game_name": "Dragon Ball Z: Budokai Tenkaichi 3", "platform": "Nintendo Wii", "comments": "Hands down, the best Dragon Ball game"},{"_Game_id:":99, "game_name": "Dark Souls", "platform": "Xbox", "comments": "You died!"}],
[{"_Game_id:":71, "game_name": "Fortnite", "platform": "Nintendo Switch", "comments": "Peely best waifu"},{"_Game_id:":100, "game_name": "The Legend Of Zelda Breath of the Wild", "platform": "Nintendo Switch", "comments": "Open world?"}, {"_Game_id:":114, "game_name": "Halo Reach", "platform": "Xbox", "comments": "Your cracrificed sowed the seeds of our future!"},{"_Game_id:":1, "game_name": "The Legend Of Zelda Tears Of the Kingdom", "platform": "Nintendo Switch", "comments": "Why do weapons break so fast"}, {"_Game_id:":3, "game_name": "Sonic Origins plus", "platform": "Nintendo Switch", "comments": "You can play as Amy!"}], 
[{"_Game_id:":30, "game_name": "Mario & Luigi Superstar Saga", "platform": "Nintendo Gameboy", "comments": "The beginning of a wonderful saga"},{"_Game_id:":506, "game_name": "Metal Gear Rising", "platform": "Xbox", "comments": "Standing here, I realize"},{"_Game_id:":521, "game_name": "Luigi's Mansion", "platform": "Nintendo Gamecube", "comments": "Mario?"},{"_Game_id:":995, "game_name": "Naruto Ultimate Ninja Storm 4", "platform": "Xbox", "comments": "Beautiful game"},{"_Game_id:":1, "game_name": "Pokemon Go", "platform": "Cellphone", "comments": "Gotta cath'em all"}]]

for(i = 0; i < 5; i++){
    let imageBuffer = fs.readFileSync(__dirname + "/videogameDB/" + "/avatarImages/" + imageNameArray[i])
    const base64Image = imageBuffer.toString('base64')
    db.user.insertOne({"name": nameArray[i], "avatar": base64Image, "username": usernameArray[i], "password": passwordArray[i], "registerDate": registerDateArray[i], "email": emailArray[i], "collection": GameCollectionArray[i]})
    db.log.insertOne({"username": usernameArray[i], "date": registerDateArray[i], "event": "logged in"})
    db.log.insertOne({"username": usernameArray[i], "date": registerDateArray[i], "event": "logged out"})
}

let emailQuery = db.user.find({"email": "BlueBeastOfKonoha@konoha.com"}, {_id:0})
console.log( `Retrieving all data from an user using only its email: ${JSON.stringify(emailQuery.toArray())}`)

console.log("------------------------------------------------------------------------------------------------------")


let gameCollectionQuery = db.user.find({"username": "_Italian Stallion"}, {collection: 1, _id: 0})

console.log(`Retrieving the video game collection of Itallian Stallion: \n ${JSON.stringify(gameCollectionQuery.toArray())}`)

console.log("------------------------------------------------------------------------------------------------------")


let haloQuery = db.user.aggregate([
    {$match: {'username': "_BlueBeast"}},
    {$unwind: '$collection'},
    {$match: {'collection.game_name': "Halo 3"}},
    {$project: {_id: 0, game_name: '$collection.game_name', platform: "$collection.platform", comments: "$collection.comments"}}
])

console.log(`Looking for videogame Halo 3 on BlueBeasts' collection: \n ${JSON.stringify(haloQuery.toArray())}`)


console.log("------------------------------------------------------------------------------------------------------")

let xboxQuery = db.user.aggregate([
    {$match: {'username': "_PervertSage"}}, 
    {$unwind: '$collection'},
    {$match: {'collection.platform': "Xbox"}},
    {$project: {_id:0, game_name: '$collection.game_name', platform: "$collection.platform", comments: "$collection.comments"}}
])

console.log(`Retrieving all Xbox videogames that belong to PervertSage's collection: \n ${JSON.stringify(xboxQuery.toArray())}`)

console.log("------------------------------------------------------------------------------------------------------")

let userLogQuery = db.log.find({username: "_SoundHashira"}, {_id: 0})

console.log( `Showing all the logs for user SoundHashira: ${JSON.stringify(userLogQuery.toArray())}`)

console.log("------------------------------------------------------------------------------------------------------")



let dateQuery = db.log.find({date :{$gt: ISODate("2002-12-30"), $lt: ISODate("2019-01-01")}}, {_id: 0})
console.log(`Retrieving all logs between 01/01/2003 and 12/31/2018: ${JSON.stringify(dateQuery.toArray())}`)

console.log("------------------------------------------------------------------------------------------------------")

let logWordQuery = db.log.find({
    $and: [
        {username: "_AllMight"},
        {event: {$regex: 'logged'}}
    ]
    }
    )
console.log( `Showing all the logs that include the word logging for user AllMight: ${JSON.stringify(logWordQuery.toArray())}`)