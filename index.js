
const express = require('express')
const app = express()
const port = 3000
app.get('/student/:id',(req, res) => {
  res.send({
  id:1, 
  name: 'kofi',
  class:'web dev',
  lastname:'Gabriel'
 
  })
  });
app.post('/student/post',(req,res) =>{
 res.send({
 id:2,
 name:'emmanuel',
 class:'web dev',
 lastname:'mends'
})
});

app.put ( '/student/:id',(req,res) =>{
res.send
({
id:1,
name:'joel',
class:'web dev',
lastname:'mensah'
})
})

app.delete('/student/:id',(req,res) => {
  res.send({
    id:1,
    name:'Gabreil',
    class:'web dev',
    lastname:'Acolatse'

  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
