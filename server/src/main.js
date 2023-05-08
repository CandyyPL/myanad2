import express from 'express'
import dotenv from 'dotenv/config.js'
import { handlePayment } from './payment.js'
import cors from 'cors'

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ express: 'all good!' })
})

app.post('/payment', handlePayment)

app.listen(PORT, () => console.log(`Listening on ${PORT}..`))
