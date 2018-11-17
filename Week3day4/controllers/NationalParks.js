// recording starts at 43 mins for this. 

module.exports={
    
    read:(req,res)=>{ // read=get; we need to get our national parks and send back as responce                 
        let db=req.app.get('db')  // the string gives us the db value associated with the string in the index.js file
        db.getNationalParks().then(response=>{
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    create:(req,res)=>{
        let db=req.app.get('db')
        let {name, imageUrl, date, location, acres, description}=req.body  // only order matters here not the actual names so you can call it what ever you want as long as you match the order in createNationaPark
        db.createNationalPark([name, imageUrl, location, date, acres, description]).then(response=>{
            res.send(response)
        })
    },

    update:(req,res)=>{
        let db=req.app.get('db')
        let {id}=req.params
        let {name, imageUrl, date, location, acres, description}=req.body
        db.updateNationalPark([id, name, location, imageUrl, description, acres, date]).then (response=>{
            res.send(response) // same as res.status(200).send(response)
        })
    },

    delete: (req,res)=>{   
        
    },

    getByName:(req,res)=>{ // explained at 2:02:00 
        let db=req.app.get('db')
        db.getParksByName(req.query.name).then(responce =>{
        res.send(responce)
        })
    }
}