const express = require('express')

const app = require('liquid-express-views')(express())

const port = 3000

app.listen(port, () => {
    console.log(`Server up and running on port ${port}...`)
})

const reqLog = (req) => {
    console.log('===========================')
    console.log('this is the request object sent from the browser')
    console.log(`${req.method} request sent to ${req.url}`)
    console.log('req params are: ', req.params)
    console.log('===========================')
}

const drinks = require("./models/drinks.js")

app.get("/", (req, res) => {
    reqLog(req)
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    reqLog(req)
    res.render('index', { drinks: drinks })
})