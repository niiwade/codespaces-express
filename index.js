const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
        res.send({
          name:'Fatima',
          class:'web dev',
          lastname:'Guindo',
          level: 100,
        }
     )
    
    });
        
          app.get ('/student/:id',(req, res) => {
          res. send ({
          id: 1, 
          name:'Fatima',
          class: 'web dev',
          lastname: 'Guindo',
          level: 100,
          })
          });


          app.post ('/student/post', (req, res) => {
              res. send({
                id: 2, 
                name: 'Hawa',
                class: 'web dev',
                lastname: 'Guindo',
                level: 100,
         })
          });

          app.put ('/student/:id', (req, res) => { 
            res. send
        ({ 
              id: 1, 
              name: 'khadijah', 
              class: 'web dev', 
              lastname: 'Guindo'
            })

          });
          app.delete('/student/id', (req, res) => { 
            res. send ({
               id: 1, 
               names: 'khadijah', 
               class: 'web dev', 
               Lastname: 'Guindo',
               level: 100,
          })
          });

          app. listen(port, () => {
            console. log('Fatimatu Guindo ${port}')
          })