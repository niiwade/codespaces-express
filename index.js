const express = require('express')
const app = express()
const port = 3000

app.get('/student',(req, res) => {
  res.send({
      name:'Agnes',
      coures:'web dev',
      leve:'one'

    });
  });


  app.get('/student/:id',(req, res) => {
    res.send({
      id:1,
        name:'Agnes',
        course:'web dev',
        level:'two'
  
      });
    });
    app.post('/student/:id',(req, res) => {
      res.send({
        id:2,
          name:'Agnes',
          course:'web dev',
          level:'three'
    
        });
      });
      app.put('/student/:id',(req, res) => {
        res.send({
          id:2,
            name:'Araba',
            course:'web dev',
            level:'four'
      
          });
        });
        app.delete('/student/:id',(req, res) => {
          res.send({
            id:2,
              name:'Agnes',
              course:'web dev',
              level:'five'
        
            });
          });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
