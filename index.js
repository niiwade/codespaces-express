const express = require('express')
const app = express()
const port = 3000

app.get('/student',(req, res) => {
  res.send({
    name:'Anita Yen',
    course:'Web Development',
    level:100,
   
   })
});
  app.get('/student/id',(req, res) => {
  res.send({
    id:2,
    name:'Deborah Tagoe',
    course:'Web Development',
    level:200,
   
   })
});
   
  app.post('/student',(req, res) => {
  res.send({
    id:3,
    name:'Habiba Mudansiru',
    course:'Product Realization',
    level:100,
   
  })
});

app.put('/student/id',(req, res) => {
  res.send({
    id:4,
    name:'Jason Sarpong',
    course:'Web Development',
    level:100,
   
  })
});

app.delete('/student/id',(req, res) => {
  res.send({
    id:5,
    name:'Anto Lante',
    course:'Design and Manufacturing',
    level:100,
   
  })
});
  

 
   


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
