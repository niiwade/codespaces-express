GET /api/student 
{
  "name": "Henry",
  "class": "web dev",
  "lastname": "Anderson"
  createdAt:Tue, 23 Jul 2024 16:18:04 GMT
}

GET /api/student/:id
{
  "id": 1,
  "name": "Efua",
  "class": "Architectual draftmanship",
  "lastname": "Quashie"
  createdAt:Tue, 23 Jul 2024 16:18:42 GMT
}

POST /api/student
{
  "id": 2,
  "name": "Perry",
  "class": "Welding",
  "lastname": "Anderson"
  createdAt:Tue, 23 Jul 2024 16:19:08 GMT
}

PUT /api/student/:id
{
  "id": 2,
  "name": "Henry",
  "class": "web dev",
  "lastname": "Anderson"
  createdAt:Tue, 23 Jul 2024 16:19:43 GMT
}

DELETE /api/student/:id
{
  "id": 2,
  "name": "Agnes",
  "class": "Graphic design",
  "lastname": "Tedu"
  createdAt:Tue, 23 Jul 2024 16:20:04 GMT
}