import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  const users = [
    {name:"Juaj", age:"24"},
    {name:"Mau", age:"27"}
  ]

  return res.json(users)
})

app.listen(3333);