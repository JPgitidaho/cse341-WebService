const express = require('express')
const app = express()
const port = 3000
const lesson1Controllers = require('./controllers/lesson1')

app.use('/juanita', lesson1Controllers.juanitaRouter);
app.use('/bugs', lesson1Controllers.bugsRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
