const express = require('express');
const dotenev = require('dotenv').config();
const colors  = require('colors')
const bodyParser = require('body-parser')
const  {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB()

const app = express()


// app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended : false}))  


app.use('/api/goals', require('./routes/getGoals'))
app.use('/api/users/' , require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`App listening at ${port}`))