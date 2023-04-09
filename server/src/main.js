import express from 'express'

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send({ express: 'all good!' })
})

app.listen(PORT, () => console.log(`Listening on ${PORT}..`))
