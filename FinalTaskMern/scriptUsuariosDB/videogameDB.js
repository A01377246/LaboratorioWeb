
const fs = require('fs');

//Drop collections if they exist

db.user.drop(); 
db.log.drop(); 

//Create the collections
db.createCollection("user");
db.createCollection("log"); 


const toISOStringWithTimezone = date => {
    const tzOffset = -date.getTimezoneOffset(); //Check how many ours are we ahead or behind UTC
    const diff = tzOffset >= 0 ? '+' : '-'; //If the offzet is greater than 0 then we are ahead, if it is less then we are behind
    const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
    return date.getFullYear() + //Get the year
      '-' + pad(date.getMonth() + 1) + //get the month and format it
      '-' + pad(date.getDate()) + //get the date and format 
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      diff + pad(tzOffset / 60) + // sett the hour ofsett
      ':' + pad(tzOffset % 60); // set the minute offset
  };

//Arrays are created for each of the attributes to be registered on the DB
//The game collection array is an array of objects
const imageNameArray = ["Profile_Guy.webp","Profile_Jiraiya.webp","Profile_Rocky.webp","Profile_AllMight.jpg","Profile_Tengen.jpg"];
const nameArray = ["Might Guy", "Jiraiya", "Rocky Balboa", "Toshinori Yagi" , "Tengen Uzui"];
const usernameArray = ["BlueBeast", "PervertSage", "Italian Stallion", "AllMight", "SoundHashira"];
const passwordArray = ["KonohaLee27", "TheChildOfProphecy12", "Mickey3333", "PlusUltra16", "MusicalScore25"];
const registerDateArray = ["2000/06/03", "2003/05/25", "2008/10/08", "2007/08/31", "2018/06/08"]; //Dates stored using ISO date
const emailArray = ["BlueBeastOfKonoha@konoha.com","ichaichaParadise@konoha.com", "balboa17@mickeysgym.com", "allMight@UAhigh.com", "tengen@demonSlayerCorps.com"];
const GameCollectionArray =[[{"Game_id": 57, "game_name": "Metal Gear Solid Snake Eater", "platform": "Xbox", "comments": "Kept you waiting, huh?"}, {"Game_id": 117, "game_name": "Halo 3", "platform": "Xbox", "comments": "Finish the fight"}, {"Game_id": 31, "game_name": "Lugi's Mansion 3", "platform": "Nintendo Switch", "comments": "Polter Pup is so cool"}, {"Game_id": 2500, "game_name": "Street Fighter II", "platform": "Nintendo SNES", "comments": "Sonic Boom!"}, {"Game_id": 18, "game_name": "Gears of War 3", "platform": "Xbox", "comments": "Berserkeeeer!"}],
[{"Game_id:":1, "game_name": "The Legend Of Zelda Tears Of the Kingdom", "platform": "Nintendo Switch", "comments": "He will be our last line of defense"}, {"Game_id:": 277, "game_name": "The Legend Of Zelda Twilight Princess", "platform": "Nintendo Gamecube", "comments": "Is the Shade of the Hero the hero of time?"}, {"Game_id:":981, "game_name": "Splatoon 3", "platform": "Nintendo Switch", "comments": "Are you a boy or a squid?"}, {"Game_id:":777, "game_name": "Minecraft", "platform": "PC", "comments": "Gonna create some Tsunade pixel art"},{"Game_id:":95, "game_name": "Assassin's Creed II", "platform": "Xbox", "comments": "Requiescat in Pace"}], 
[{"Game_id:":33, "game_name": "Sonic The Hedgehog (2006)", "platform": "Xbox", "comments": "Underrated Sonic Game"}, {"Game_id:": 1980, "game_name": "Assassin's Creed Revelations", "platform": "Xbox", "comments": "Best AC game!"},{"Game_id:":47, "game_name": "Star Wars: The Old Republic", "platform": "PC", "comments": "So many possibilities!"},{"Game_id:":42, "game_name": "Dragon Ball Z: Budokai Tenkaichi 3", "platform": "Nintendo Wii", "comments": "Hands down, the best Dragon Ball game"},{"Game_id:":99, "game_name": "Dark Souls", "platform": "Xbox", "comments": "You died!"}],
[{"Game_id:":71, "game_name": "Fortnite", "platform": "Nintendo Switch", "comments": "Peely best waifu"},{"Game_id:":100, "game_name": "The Legend Of Zelda Breath of the Wild", "platform": "Nintendo Switch", "comments": "Open world?"}, {"Game_id:":114, "game_name": "Halo Reach", "platform": "Xbox", "comments": "Your cracrificed sowed the seeds of our future!"},{"Game_id:":1, "game_name": "The Legend Of Zelda Tears Of the Kingdom", "platform": "Nintendo Switch", "comments": "Why do weapons break so fast"}, {"Game_id:":3, "game_name": "Sonic Origins plus", "platform": "Nintendo Switch", "comments": "You can play as Amy!"}], 
[{"Game_id:":30, "game_name": "Mario & Luigi Superstar Saga", "platform": "Nintendo Gameboy", "comments": "The beginning of a wonderful saga"},{"Game_id:":506, "game_name": "Metal Gear Rising", "platform": "Xbox", "comments": "Standing here, I realize"},{"Game_id:":521, "game_name": "Luigi's Mansion", "platform": "Nintendo Gamecube", "comments": "Mario?"},{"Game_id:":995, "game_name": "Naruto Ultimate Ninja Storm 4", "platform": "Xbox", "comments": "Beautiful game"},{"Game_id:":1, "game_name": "Pokemon Go", "platform": "Cellphone", "comments": "Gotta cath'em all"}]]

//Insert all the data from the arrays iteratively
for(i = 0; i <= 4; i++){
    
    let imageBuffer = fs.readFileSync(__dirname + "/videogameDB/" + "/avatarImages/" + imageNameArray[i]) //Building the path and getting the image from the image folder
    const base64Image = imageBuffer.toString('base64') //Converting the image to base64

    //insert users into the user collection and logs into the log collection
    db.user.insertOne({"name": nameArray[i], "avatar": base64Image, "username": usernameArray[i], "password": passwordArray[i], "registerDate": registerDateArray[i], "email": emailArray[i], "collection": []})
    /*
    db.log.insertOne({"username": usernameArray[i], "date": toISOStringWithTimezone(new Date(registerDateArray[i])), "event": "Logged in"})
    db.log.insertOne({"username": usernameArray[i], "date": toISOStringWithTimezone(new Date(registerDateArray[i])), "event": "Added a game"})
    db.log.insertOne({"username": usernameArray[i], "date": toISOStringWithTimezone(new Date(registerDateArray[i])), "event": "Deleted a game"})
    db.log.insertOne({"username": usernameArray[i], "date": toISOStringWithTimezone(new Date(registerDateArray[i])), "event": "Logged out"})
    */
}

//Since the query returns a cursor, the method toArray must be used to display it on the console. 
const emailQuery = db.user.find({"email": "BlueBeastOfKonoha@konoha.com"}, {_id:0})
console.log( `Query #1 \nRetrieving all data from an user using only its email: ${JSON.stringify(emailQuery.toArray())}`)

console.log("\n*****************************************************************************************************************\n")

const gameCollectionQuery = db.user.find({"username": "Italian Stallion"}, {collection: 1, _id: 0}) //Projecting only the collection and removing the id from the projection

console.log(`Query #2 \nRetrieving the video game collection of Itallian Stallion: \n ${JSON.stringify(gameCollectionQuery.toArray())}`)

console.log("\n*****************************************************************************************************************\n")


const haloQuery = db.user.aggregate([
    {$match: {'username': "BlueBeast"}}, //Get the document that belongs to _BlueBeast
    {$unwind: '$collection'},  //Unpack the collection
    {$match: {'collection.game_name': "Halo 3"}}, //Look for halo 3
    {$project: {_id: 0, game_name: '$collection.game_name', platform: "$collection.platform", comments: "$collection.comments"}}
])

console.log(`Query #3 \nLooking for videogame Halo 3 on BlueBeasts' collection: \n ${JSON.stringify(haloQuery.toArray())}`)


console.log("\n****************************************************************************************************************\n")

const xboxQuery = db.user.aggregate([
    {$match: {'username': "PervertSage"}}, 
    {$unwind: '$collection'},
    {$match: {'collection.platform': "Xbox"}},
    {$project: {_id:0, game_name: '$collection.game_name', platform: "$collection.platform", comments: "$collection.comments"}}
])

console.log(`Query #4 \nRetrieving all Xbox videogames that belong to PervertSage's collection: \n ${JSON.stringify(xboxQuery.toArray())}`)

console.log("\n***************************************************************************************************************\n")

const userLogQuery = db.log.find({username: "SoundHashira"}, {_id: 0})

console.log( `Query #5 \nShowing all the logs for user SoundHashira: ${JSON.stringify(userLogQuery.toArray())}`)

console.log("\n**************************************************************************************************************\n")

const dateQuery = db.log.find({date :{$gt: toISOStringWithTimezone(new Date("2002-12-30")), $lt: toISOStringWithTimezone(new Date("2019-01-01"))}}, {_id: 0})
console.log(`Query #6 \nRetrieving all logs between 01/01/2003 and 12/31/2018: ${JSON.stringify(dateQuery.toArray())}`)
8
console.log("\n**************************************************************************************************************\n")

const logWordQuery = db.log.find({
    $and: [ //looks for all the events that contain the word logged and belong to AllMight
        {username: "AllMight"},
        {event: {$regex: 'game'}}
    ]
    }
    )
console.log( `Query #7 \nShowing all the logs that include the word game for user AllMight: ${JSON.stringify(logWordQuery.toArray())}`)

console.log("\n**************************************************************************************************************\n")

