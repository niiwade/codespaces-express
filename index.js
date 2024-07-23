const express = require('express');
const app = express();
const port = 3000;

app.get('/student', (req, res) => {
  res.send ({
    id: 1,
    name:'Hiba Siru',
    course:'Web Development',
    level:'100',

    id: 2,
    name:'Nana Ama Linda',
    course:'Graphic Design',
    level:'200',

    id: 3,
    name:'Francisca Frimpong',
    course:'Welding and Fabrication',
    level:'300',
  }

  )
});

app.get('/student/:id', (req, res) => {
  res.send ({
    id: 2,
    name:'Nana Ama Linda',
    course:'Graphic Design',
    level:'200',
  }

  )
});


app.post('/student/post', (req, res) => {
  res.send ({
    id: 1,
    name:'Hiba Siru',
    course:'Web Development',
    level:'100',
  }

  )
});


app.put('/student/:id', (req, res) => {
  res.send ({
    id: 3,
    name:'Francisca Frimpong',
    course:'Welding and Fabrication',
    level:'300',
  }

  )
});


app.delete('/student/:id', (req, res) => {
  res.send ({
    id: 1,
    name:'Hiba Siru',
    course:'Web Development',
    level:'100',
  }

  )
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});