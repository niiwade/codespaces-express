const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
  res.send({
    name:'Jephthah',
    course:'web dev',
    level:400
  }
)

});

app.get('/student/:id',(req, res) => {
res.send({
  id:1,
  name:'Jephthah',
  course :'web dev',
  level:400
})
});


app.post('/student/post',(req, res) => {
  res.send({
    id:200,
    name:'Araba',
    course :'web dev',
  })
  });

  app.put('/student/:id',(req, res) => {
    res.send({
      id:1,
      name:'Jevis',
      course :'web dev',
      level:400

    })
    });

    app.delete('/student/:id',(req, res) => {
      res.send({
        id:1,
        name:'Jephthah',
        course :'web dev',
        level:400

      })
      });

app.listen(port, () => {
  console.log(` Jephthah Essel ${port}`)
})



