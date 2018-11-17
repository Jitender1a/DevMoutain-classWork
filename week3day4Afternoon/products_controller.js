module.exports={
    create:(req,res)=>{  //adding a new product 
        let dbInstance=req.app.get('db');   
        const {name, description, price, image_url}=req.body;
        
        dbInstance.create_product([name, description, price, image_url]).then(response=>{
            res.status(200).send(response)
        }).catch (err=>{
            res.status(500).send(err)
        });
    },

    getOne:(req,res)=>{
        let dbInstance=req.app.get('db');   
        const {params}=req; 

        dbInstance.read_product(params.id).then(response=>{
            res.status(200).send(response)
        }).catch (err=>{
            res.status(500).send(err)
        });

    },

    getAll:(req,res)=>{
        let dbInstance=req.app.get('db');
        dbInstance.read_products().then(response=>{
            res.status(200).send(response)
        }).catch (err=>{
            console.log('it broke', err)
            res.status(500).send(err)
        });
    },

    update:(req,res)=>{
        let dbInstance=req.app.get('db');
        const {params,query}=req;

        dbInstance.update_product([params.id, query.desc]).then(response=>{
            res.status(200).send(response)
        }).catch (err=>{
            res.status(500).send(err)
        })
    },

    delete:(req,res)=>{
        let dbInstance=req.app.get('db');
        const {params}=req;

        dbInstance.delete_product([params.id]).then(response=>{
            res.status(200).send(response)
        }).catch (err=>{
            res.status(500).send(err)
        })
    }
}
