


GET /api/student - Retrieve all student name
{
  "id": 12,
  "name": "Hanson",
  "level": 3,
  "course": "webDev",
  "createdAt": "23 July 2004"
}



GET /api/student/:id - Retrieve a specific student
{
  "id": 2,
  "name": "Osei",
  "level": 5,
  "course": "webDev",
  "createdAt": "23 July 2004"
}

POST /api/student - Create a new student
{
  "id": 23,
  "name": "Ella Lartey",
  "level": 3,
  "course": "webDev",
  "createdAt": "23 July 2004"
}

PUT /api/student/:id - Update an existing student

{
  "id": 23,
  "name": "Ella Akosua Lartey",
  "level": 5,
  "course": "web Dev",
  "createdAt": "23 July 2024"
}


DELETE /api/student/:id - Delete a student
{
  "id": 12,
  "name": "Hanson",
  "level": 3,
  "course": "webDev",
  "createdAt": "23 July 2004"
}