"use strict";

const { query } = require("express");
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "videogameDB";

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

exports.getUserByEmail = async function (req, res) {
  const database = client.db(dbName);

  const userCollection = database.collection("user");

  let userEmail = req.params.email;

  const query = { email: userEmail };

  const options = {
    projection: { _id: 0 },
  };

  const user = await userCollection.findOne(query, options);

  res.end(JSON.stringify(user));
};

exports.checkIfUserExists = async function (req, res){
  const database = client.db(dbName);

  const userCollection = database.collection("user");

  let user = req.params.username

  const query = {username: user}

  const queryResult = await userCollection.findOne(query)

  if(queryResult == null){
    res.end(JSON.stringify({userExists: false}))
  }else{
    res.end(JSON.stringify({userExists: true}))
  }


}

exports.login = async function (req, res) {

  //Necessary for CORS if the npm package cors is not installed and configured on the server. js app
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const database = client.db(dbName);

  const userCollection = database.collection("user");

  //The provided parameter is a json object so it must be parsed first for being destructured

  const credentialsObject = req.body
  
  //The credential object is destructured
  const { providedUsername, providedPassword } = credentialsObject;


  const query = {
    $and: [{ username: providedUsername }, { password: providedPassword }],
  };

  const user = await userCollection.findOne(query);

  if (user !== null) {
    res.end(JSON.stringify({loginResult: true}));
  } else {
    res.end(JSON.stringify({loginResult: false}));
  }
};

exports.addGameToUserCollection = async function (req, res){

  const database = client.db(dbName);

  const userCollection = database.collection("user");

  let {providedUsername, game} = req.body

  //const gameObject = JSON.parse(req.body)

  console.log(`${providedUsername} wants to insert ${JSON.stringify(game)}`)

  const result = await userCollection.updateOne({username: providedUsername}, {$push: {"collection":game}})

  res.end(JSON.stringify({result: true}))

}

exports.getCollectionByUsername = async function(req,res){

    const database = client.db(dbName);

    const userCollection = database.collection("user");

    const providedUsername = req.params.username;

    const options = {projection: {_id: 0, "collection":1}};

    const query = {username: providedUsername};

    const collectionResult = await userCollection.findOne(query, options);

    console.log(`got a request will return ${collectionResult}`)

    res.end(JSON.stringify(collectionResult));
}

exports.getGameByUsernameAndGameName = async function(req, res){

    const database = client.db(dbName);

    const userCollection = database.collection("user");

    const dataObject = JSON.parse(req.params.data);

    const {providedUsername, gameName} = dataObject;
    
    const queryResult = userCollection.aggregate([
        {$match: {'username': providedUsername}}, //Get the document that belongs  to the provided user
        {$unwind: '$collection'},  //Unpack the collection
        {$match: {'collection.game_name': gameName}}, //Look for gameName
        {$project: {_id: 0, game_name: '$collection.game_name', platform: "$collection.platform", comments: "$collection.comments"}} // omit the id and only show the game's info
    ])

    await queryResult.toArray().then((data) => {
        res.end(JSON.stringify(data));
        });
    
}

//Insert the add game function in here


exports.getGameByUsernameAndGamePlatform = async function(req, res){

    const database = client.db(dbName);

    const userCollection = database.collection("user");

    const dataObject = JSON.parse(req.params.data);

    const {providedUsername, platformName} = dataObject;

    const queryResult = userCollection.aggregate([
        {$match: {'username': providedUsername}}, //Get the document that belongs to the provided user
        {$unwind: '$collection'},  //Unpack the collection
        {$match: {'collection.platform': platformName}}, //Look for platform
        {$project: {_id: 0, game_name: '$collection.game_name', platform: "$collection.platform", comments: "$collection.comments"}} // omit the id and only show the game's info
    ])

    await queryResult.toArray().then((data) => {
        res.end(JSON.stringify(data));
        });

}

 //This function adds date and time for any given log

exports.AddLogEvent = async function(req, res){

    const database = client.db(dbName);

    const logCollection = database.collection("log");

    const newLog = req.body
    //Get today's date
    let todaysDate = new Date();

   //Convert to ISO Date format using helper function
    newLog.date = toISOStringWithTimezone(todaysDate)

   //Insert to the db
    const result = await logCollection.insertOne(newLog)

    res.end(JSON.stringify({result: true}))

}

exports.getLogsByUsername = async function(req,res){

    const database = client.db(dbName);

    const logCollection = database.collection("log");

    const providedUsername = req.params.username

    const query = {
        username: providedUsername
    };

    const options = {
      projection: {_id: 0}
    }

   const cursor = logCollection.find(query, options)

   await cursor.toArray().then((data) => {
    res.end(JSON.stringify(data))
   })

}

exports.getLogsByUserAndKeyword = async function(req,res){

  const database = client.db(dbName);

  const logCollection = database.collection("log");

  const dataObject = JSON.parse(req.params.data)

  const {providedUsername, keyword} = dataObject

  const query = {
    $and:[
      {username: providedUsername},
      {event : new RegExp(keyword, 'i')}
    ]
  }

  const options = {
    projection: {_id: 0}
  }

  const cursor = logCollection.find(query, options);
  await cursor.toArray().then((data) => {
    res.end(JSON.stringify(data));
  })
}

exports.getLogsByDateRange = async function(req, res){

  const database = client.db(dbName);

  const logCollection = database.collection("log");

  const dataObject = JSON.parse(req.params.data)

  const {startDate, endDate} = dataObject

  //The startDate and end Dates are used to create a new Date object that will be passed as parameter to toISOStringWithTimezone
  const query = {
    date: {$gt: toISOStringWithTimezone(new Date(startDate)), $lt: toISOStringWithTimezone(new Date(endDate))}
  }

  const options = {
    projection: {_id: 0}
  }

  const cursor = logCollection.find(query, options);
  await cursor.toArray().then((data) => {
    res.end(JSON.stringify(data));
  })
}