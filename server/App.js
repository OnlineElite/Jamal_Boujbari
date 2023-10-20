const express = require('express');
const cors = require('cors');
const app = express();
const port = 7000;

const Routes = require('./Routes')

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/client', Routes)

app.listen(port, ()=> console.log(`Server listening on port ${port}`))
