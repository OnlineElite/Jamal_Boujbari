const express = require("express");
const router = express.Router();

const {contactMessage} = require('./Controler')

router.post('/sendMessage', contactMessage)