const express = require('express')
const app = express()
const port = 3000

app.get('/student/', (req, res) => {
  res.send({
 name: 'badu',
 course: 'web dev',
 level: 3,
})

});

app.get('/student/:id', (req, res) => {
  res.send({
 id:1,   
 name: 'badu',
 course: 'web dev',
 level: 3,
})


});

app.post('/student/:post', (req, res) => {
  res.send({
 id: 2,   
 name: 'badu',
 course: 'web dev',
 level: 3,
})


});

app.put('/student/:id', (req, res) => {
  res.send({
 id: 1,   
 name: 'badu',
 course: 'web dev',
 level: 3,
})


});

app.delete('/student/:id', (req, res) => {
  res.send({
 id: 1,   
 name: 'badu',
 course: 'web dev',
 level: 3,
})


});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
