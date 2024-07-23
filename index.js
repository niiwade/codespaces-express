const express = require('express')
const app = express()
const port = 3000


app.get('/student',(req,res) => {
  res.send({
    name:'Maame Efua',
    course:'Web Development',
    level: 100,
  })
});
app.get('/student/:id',(req,res) => {
  res.send({
    id:2,
    name:'Joel',
    course:'Web Development',
    level: 500,
  })
});
app.post('/student',(req,res) => {
  res.send({
    name:'Henry',
    course:'Web Development',
    level: 100,
  })
});

app.put('/student/:id',(req,res) => {
  res.send({
    id:3,
    name:'Dinsey',
    course:'Web Development',
    level: 200,
  })
});

app.delete('/student/:id',(req,res) => {
  res.send({
    id:4,
    name:'Jason',
    course:'Web Development',
    level: 300,
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

