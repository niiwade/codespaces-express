const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
  res.send({

    name: "araba",
   
    course: "animation",
   
    level: 1,
   
    createdAt:"1/1/2001", 
   
   })
});

app.get('/student/:id', (req, res) => {
  res.send({
    id: 10,

    name: "araba",
   
    course: "animation",
   
    level: 1,
   
    createdAt:"1/1/2001", 
   
   })
});
app.post('/student/post',(req, res) => {
  res.send({
  id:11,

  name:'maame',

  course:"web development",

   level:1,

   createdAt:"1/1/2001"
  })
  });
  app.put('/student/:id',(req, res) => {
    res.send({
    id:10,
  
    name:'mends',
  
    course:"animation",
  
     level:2,
  
     createdAt:"2/1/2001"
    })
    });
    app.delete('/student/:id',(req, res) => {
      res.send({
      id:10,
    
      name:'araba',
    
      course:"animation",
    
       level:1,
    
       createdAt:"1/1/2001"
      })
      });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
