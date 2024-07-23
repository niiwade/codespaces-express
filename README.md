GET /api/students
        {
          name:'Fatima',
          class:'web dev',
          lastname: 'Guindo',
          level: '100',
        }

GET /api/students/:id
        {
          id: 1, 
          name:'Fatima',
          class: 'web dev',
          lastname: 'Guindo',
          level: '100',
        }

POST /api/students
        {
            id: 2, 
            name: 'Hawa',
            class: 'web dev',
            lastname: 'Guindo',
            level: '100',
         }

PUT /api/student/:id
       { 
              id: 1, 
              name: 'khadijah', 
              class: 'web dev', 
              lastname: 'Guindo'
              level: '100',
          }

DELETE /api/student/:id
       {
               id: 1, 
               names: 'khadijah', 
               class: 'web dev', 
               Lastname: 'Guindo',
          }