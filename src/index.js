/**
 * Copyright (c) 2020
 * 
 * main app for chat-app
 * 
 * @author Chun Wu <the.chun.wu@gmail.com>
 * 
 * Created: February 09, 2020
 * 
 */

//
const path = require('path')
const express = require('express')
const app = express()
// custom modules

// variables
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})