import app from './app.js'
import {Home, Post, Dinamic, User} from './controllers/controllers.js'

app.get('/', Home)

app.get('/login', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/user',User)


app.post('/comentarios', Post)

app.get('/:id', Dinamic)

app.listen(3000, () => console.log("http://localhost:3000"))
