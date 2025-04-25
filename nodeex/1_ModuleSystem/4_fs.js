

const fs = require('fs')

//Read the file
let fileContent = fs.readFileSync('f1.txt')
console.log('This is the file 1: '+fileContent)

//Write the file
fs.writeFileSync('f2.txt','This is the file 2')
console.log('file has been written ')

// Append the file
fs.appendFileSync('f3.txt',':this is updated data')
console.log('File has been appended')

//Delete the file
fs.unlinkSync('f2.txt')
console.log('File has been deleted')