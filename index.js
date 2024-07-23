 express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
res.send({
  name:'Emmanuel',
  course:'web development',
  level:100
  
  
})
});

app.get('/student/:id', (req, res) => {
  res.send({
    id:80,
    name:'Emmanuel',
    course:'web development',
    level:100
    
  })
  });
  app.post('/student/post', (req, res) => {
    res.send({
      id: 50,
      name:'Ama',
      course:'web development',
      level:100
      
      
    })
    });

    app.put('/student/:id', (req, res) => {
      res.send({
        name:'Emmanuel',
        course:'web development',
        level:100
        
      })
      });

      app.delete('/student/:id', (req, res) => {
        res.send({
          id:30,
          name:'kwame',
          class:'web development',
          level:100
          
        })
        });

// app.post('/student/post',)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
