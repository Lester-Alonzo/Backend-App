import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (_, res) => {
  res.send("hello world")
})

app.post('/comentarios', (req, res) => {
  const body = req.body
  res.json(body)
})

app.get('/:id', (req, res) => {
  const { id } = req.params
  res.send(id)
})


app.listen(3000, () => console.log("http://localhost:3000"))
