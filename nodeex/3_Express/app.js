const express =require('express')

const app = express()
const customMiddleware=require('./middleware/middleware') // Import the custom middleware
const secondMiddleware=require('./middleware/secondMiddleware') // Import the second middleware
const morgan = require('morgan') // Import morgan for logging

app.use(express.json()) // Middleware to parse JSON request body

app.use(customMiddleware)

app.use(secondMiddleware) // Use the custom middleware for all routes

app.use(morgan('tiny'))

const courses=[
    {id:1,name:'Nodejs'},
    {id:2,name:'Reactjs'},
    {id:3,name:'Angularjs'},
    {id:4,name:'Expressjs'},
]

//Get method
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page')
})

app.get('/courses',(req,res)=>{ 
    res.send(courses)
})

//Post method
app.post('/courses',(req,res)=>{
    const course={
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})              

//Put method
app.put('/courses/:coursename',(req,res)=>{
    //Find the course
    let course= courses.find(course=>course.name===req.params.coursename)
    if(!course) 
        return res.status(404).send('Course not found')
    //Update the course
    course.name=req.body.name
    res.send(course)
})

//Route Parameters
app.get('/courses/:coursename',(req,res)=>{
    console.log(req.params.name)
    let course= courses.find(course=>course.name===req.params.coursename)
    if(!course) 
        return res.status(404).send('Course not found')
    res.send(course)
})

//Delete Method for Coursename

// app.delete('/courses/:coursename',(req,res)=>{         
//     //Find the course
//     let course = courses.filter(course=>course.name !== req.params.coursename)
//     res.send(course)
//     console.log("Course",course)
// })


//Delete Method for id

app.delete('/courses/:id',(req,res)=>{  
    //Find the course
    let course = courses.find(course=>course.id === parseInt(req.params.id))
    if(!course) 
        return res.status(404).send('Course not found')
    const index = courses.indexOf(course)
    console.log(index)
    courses.splice(index,1)
    console.log('courses',courses)
    res.send(course)
})

const port=process.env. PORT || 3000 // Set the port to 3000 or use the PORT environment variable if available

app.listen(port,()=>console.log(`Port is running on ${port}`)) // Start the server and listen on the specified port