const app = require("./app");

const connectDatabase = require('./config/databse')

const dotenv = require('dotenv');

dotenv.config({path: 'backend/config/config.env'})

connectDatabase();

app.listen(process.env.PORT || 4000, ()=> {
    console.log(`App listening to ${process.env.PORT} in ${process.env.NODE_ENV}`)
})