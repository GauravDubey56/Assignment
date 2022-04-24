//imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

//routers
const routes = require('./routes')

// defining apps
const app = express();
dotenv.config({ path: './src/config/config.env' });
//middlewares
app.use(helmet());
app.use(
    bodyParser.urlencoded({
      extended: false
    })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
console.log(process.env.testKey)
connectDB();

app.use('/api/v1/cmdty', routes.cmdty)
app.use('/api/v1/market', routes.market)
app.use('/api/v1/report', routes.reports)
app.listen(3000, () => {
    console.log('listening on port 3000');
});