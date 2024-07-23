const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
  res.send({
    name:"Mark",
    course:"web dev",
    level:100,
    
  })
});

app.get('/student/id', (req, res) => {
  res.send({
    id:1,
    name:"Agnes",
    course:"web dev",
    level:100,
    
  })
});

app.post('/student', (req, res) => {
  res.send({
    id:2,
    name:"Ophelia",
    course:"web dev",
    level:100,
    
  })
});

app.put('/student', (req, res) => {
  res.send({
    id:3,
    name:"Ernest",
    course:"web dev",
    level:100,
    
  })
});

app.delete('/student', (req, res) => {
  res.send({
    id:4,
    name:"Anita",
    course:"web dev",
    level:100,
    
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
