const express = require('express')
const app = express()
const port = 3000

app.get('/student/', (req, res) => {
  res.send({
    id: 12,
    name: 'Hanson',
    level: 3,
course: 'webDev',
createdAt: '23 July 2004'
  })
})

app.get('/student/:id', (req, res) => {
  res.send({
    id: 2,
    name: 'Osei',
    level: 5,
course: 'webDev',
createdAt: '23 July 2004'
  })
})


app.post('/student/', (req, res) => {
  res.send({
    id: 23,
    name: 'Ella Lartey',
    level: 3,
course: 'webDev',
createdAt: '23 July 2004'
  })
})



app.put('/student/id', (req, res) => {
  res.send({
    id: 23,
    name: 'Ella Akosua Lartey',
    level: 5,
course: 'web Dev',
createdAt: '23 July 2024'
  })
})


app.delete('/student/id', (req, res) => {
  res.send({
    id: 12,
    name: 'Hanson',
    level: 3,
course: 'webDev',
createdAt: '23 July 2004'
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
