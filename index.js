import app from './app.js'
import {Home, Post, Dinamic} from './controllers'

app.get('/', Home)

app.post('/comentarios', Post)

app.get('/:id', Dinamic)

app.listen(3000, () => console.log("http://localhost:3000"))
