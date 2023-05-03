const express = require('express');
 const app =express();
 port = 5000;
 const data = require('./Data/data.json')
 const food = require('./Data/food.json')

 const cors = require('cors')
 app.use(cors())

 app.get('/',(req,res)=>{
     res.send("The chef side server")
 })
 app.get('/data/:id',(req,res)=>{
     const id = req.params.id 
     const details = data.find(d=>d.id == id)
     res.send(details)
 })
app.get('/data',(req,res)=>{
     res.send(data)
})
app.get('/food/:id',(req,res)=>{
     const id = req.params.id
     const foods = food.filter(f1=>f1.id == id)
     res.send(foods)
})
app.get('/food',(req,res)=>{
     res.send(food)
})

 app.listen(port,()=>{
      console.log(`Example app listening on port ${port}`)
 })