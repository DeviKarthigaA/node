//Directiores
const fs = require('fs')


//Create the directory
// fs.mkdirSync('MyDirectory')

//Check the content inside of adirectory 
// let folderpath='D:\\ReactProject\\nodeex\\modulesystem\\MyDirectory'

// let foldercontent=fs.readdirSync(folderpath)
// console.log('foldercontent',foldercontent)

//check whether a directory exists or not
let doesExit=fs.existsSync('1_cp.js')
console.log(doesExit)

//Remove directory

fs.rmdirSync('MyDirectory')
console.log('File has been Deleted')
