const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
  res.send({
    id:1,
    name:'Eugene',
    class:'web dev',
    lastname:'Ohene'
  })
  });

app.get('/student/:id', (req, res) => {
  res.send({
    id:1,
    name:'Eugene',
    class:'web dev',
    lastname:'Ohene'
  })
  });


  app.post('/student/post',(req, res) => {
  res.send({
    id:2,
    name:'Gabriel',
    class:'web dev',
    lastname:'Acolaste'
  })
  });


  app.put('/student/:id',(req, res) => {
  res.send({
    id:1,
    name:'Osman',
    class:'design manufacturing',
    lastname:'Umar'
  })
  });


  app.delete('/student/:id',(req, res) => {
  res.send({
    id:1,
    name:'Jephthah',
    class:'web dev',
    lastname:'Essel'
  })
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
