const express = require('express');
const app = express();
const port = process.env.PORT||8999;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb+srv://dbvineela:nikhila@2002@cluster0.bbbvz.mongodb.net/edurekaInternship?retryWrites=true&w=majority";
var cors = require('cors');
const bodyParser = require('body-parser');
let db;
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req, res) => {
    db.collection('restaurant').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
//restaurant

app.get('/restaurantdetail/:id',(req,res) => {
    var query = {_id:req.params.id}
    db.collection('restaurant').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurantHome', (req, res)=> {
    var query = {};
    if(req.query.city && req.query.mealtype){
        query={city:req.query.city,"type.mealtype": req.query.mealtype}
    }
    else if(req.query.city){
        query = {city:req.query.city} 

    }
    else if(req.query.mealtype){
        query={"type.mealtype": req.query.mealtype}
    }
    db.collection('restaurant').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    })
})



app.get('/restaurantlist/:city/:mealtype',(req,res) => {
    var query = {}
    var sort = {cost:1}
    if(req.query.cuisine && req.query.lcost && req.query.hcost && req.query.sort){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}
        sort={cost:parseInt(req.query.sort)} 
    }
    else if(req.query.cuisine&&req.query.lcost && req.query.hcost){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}
    }
    else if(req.query.cuisine&&req.query.sort){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine}
        sort={cost:parseInt(req.query.sort)} 
    }
    else if(req.query.lcost && req.query.hcost&&req.query.sort){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}
        sort={cost:parseInt(req.query.sort)} 
    }
    else if(req.query.cuisine){
        query = {city:req.params.city,"type.mealtype": req.params.mealtype,"Cuisine.cuisine":req.query.cuisine} 
    }else if(req.query.lcost && req.query.hcost){
        query={city:req.params.city,"type.mealtype": req.params.mealtype,cost:{$lt:parseInt(req.query.hcost),$gt:parseInt(req.query.lcost)}}
    }else if(req.query.sort){
        query={city:req.params.city,"type.mealtype": req.params.mealtype}
        sort={cost:parseInt(req.query.sort)}
    }else{
        query = {city:req.params.city,"type.mealtype": req.params.mealtype}
        sort = {cost:1}
    }
    db.collection('restaurant').find(query).sort(sort).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


//City List
app.get('/location',(req,res) => {
    db.collection('city').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//cuisine
app.get('/cuisine',(req,res) => {
    db.collection('cuisine').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//mealtype
app.get('/mealtype',(req,res) => {
    db.collection('mealtype').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//Orders data
app.get('/orders', (req, res) => {
    db.collection('orders').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//Place an order
app.post('/placeorder', (req,res)=> {
    db.collection('orders').insert(req.body, (err, result)=>{
        if(err) throw err;
        res.send("Data Added");
    })
})

MongoClient.connect(mongoUrl,(err,client) => {
    if(err) throw err
    db= client.db('edurekaInternship');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})
