let express = require('express')

const cors = require("cors")

app = express()

port = process.env.port || 8585;

app.use(express.urlencoded({extended: true}))

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions))

let routes = require('./GameAppRoutes');

routes(app)

app.listen(port);


console.log('Server listening on:' + port)


