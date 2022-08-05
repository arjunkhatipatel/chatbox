var fs = require('fs')
var data = require('./demo.json')
console.log(data.name)

fs.readFile('./demo.json', 'utf-8', (err,data) =>{
    var data = JSON.parse(data)
    console.log(data.name)
})