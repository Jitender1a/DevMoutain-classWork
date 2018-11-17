const express = require('express')
const bodyParser=require('body-parser')
const massive= require('massive')
require ('dotenv').config() // allows us to have the dotenv file if we did not have the file we would have to store the enivorment files such as connection_string somewhere else 
const NPC = require('./controllers/NationalParks')

const app=express()
const {APP_PORT, CONNECTION_STRING} = process.env   // OBJECT DESCTRURING 

massive(CONNECTION_STRING).then(db=>{
    console.log('db is connected') 
    app.set('db',db)  // name is 'db' in green, the value is the db object in blue
}) .catch(err=>{
    console.error('error connecting to db',err) //19:00
});

console.log(11111111111, NPC)


app.use(bodyParser.json())// audio recording starts at .gitignore and here 

app.get('/api/national_parks', NPC.read)
app.post('/api/national_parks',NPC.create)
app.put('/api/national_parks/:id', NPC.update)
app.get('/api/national_parks/search', NPC.getByName) // wrote search because we to destuingish it from the first get so it doesnt just pull this one. 

app.listen(APP_PORT,()=>{ // object descrtutuing being used here
    console.log('listening on port',APP_PORT) // after running nodemon the recording starts again at 8:51.
})