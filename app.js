import express from "express"
import cors from "cors"
import helmet from 'helmet'
import morgan from 'morgan'
import { auth, requiresAuth } from 'express-openid-connect'

const app = express()

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'c1ffab21d6d1a0f410eed1475754bc74386b542cf83151d37fe3facb85c1a9ca',
  baseURL: 'http://localhost:3000',
  clientID: 'Z408gF53mW6J0kaXxujuaigP6LA0ylQV',
  issuerBaseURL: 'https://dev-4q13yxwg.us.auth0.com'
};




app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

export default app
