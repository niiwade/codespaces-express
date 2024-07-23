const express = require('express')
const app = express()
const port = 3000

app.get('/students', (req, res) => {
  res.send({
    Name: 'Israel Azidor',
    Course: 'Web Development',
    Level: '100',
    createDAt:'23-07-2024'
  })
})


app.get('/students/:id', (req, res) => {
  res.send({
    ID:'1',
    Name: 'Israel Azidor',
    Course: 'Web Development',
    Level: '100',
    createDAt:'23-07-2024'
  })
})

app.post('/student/post', (req, res) => {
  res.send({
    ID:'2',
    Name: 'Israel LarryKing',
    Course: 'Web Development',
    Level: '100',
    createDAt:'23-07-2024'
  })
})

app.put('/student/:id', (req, res) => {
  res.send({
    ID:'3',
    Name: 'Anita Yen',
    Course: 'Web Development',
    Level: '100',
    createDAt:'23-07-2024'
  })
})

app.delete('/student/:id', (req, res) => {
  res.send({
    ID:'1',
    Name: 'Israel Azidor',
    Course: 'Web Development',
    Level: '100',
    createDAt:'23-07-2024'
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
