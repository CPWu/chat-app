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
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

// custom modules

// variables
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New Websocket Connection')

    socket.emit('message', 'Welcome to the chat server')
    socket.broadcast.emit('message', 'A new user has joined the chatroom.')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

    socket.on('sendLocation', (coords) => {
        io.emit('message', `Location: ${coords.latitude}, ${coords.longitude}`)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has disconnected')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port: ${port}!`)
})