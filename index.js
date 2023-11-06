import express from 'express'

//instance of app
const app = express();

//up respo for root path of application 
const port = process.env.PORT || 3001

//app to listen to port 
app.get('/',(req,res) => {
    res.send("draw a duck");
    
})

console.log("hello")
//
app.listen(port, () => {
    console.log('example app listening on port ${port}');
})