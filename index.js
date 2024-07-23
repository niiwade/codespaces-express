const express = require('express')
const app = express()
const port = 3000

app.get('/student',(req, res) => {
  res.send({
    name:'Henry',
    class:'web dev',
    level:100,
    createdAt:'20/1/2024'
  })
  });

  app.get('/student/:id',(req, res) => {
    res.send({
      id:1,
      name:'Efua',
      course:'Architectual draftmanship',
      level:200,
      createdAt:'21/2/2024'
    })
    });

    app.post('/student/:id',(req, res) => {
      res.send({
        id:2,
        name:'Perry',
        course:'Welding',
        level:300,
        createdAt:'21/3/2024'
      })
      });

      app.delete('/student/:id',(req, res) => {
        res.send({
          id:2,
          name:'Agnes',
          course:'Graphic design',
          level:400,
          createdAt:'21/4/2024'
        })
        });


      app.put('/student/:id',(req, res) => {
        res.send({
          id:2,
          name:'Henry',
          course:'web dev',
          level:500,
          createdAt:'21/5/2024'
        })
        });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
