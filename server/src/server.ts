import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import api from './moules/api';
import { CORS_ORIGIN } from './utils/constants';
import deserializeUser from './middleware/deserializeUser';



function createServer() {
  const app = express()
  app.use(cookieParser())
  app.use(express.json())
  app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true,
  }))
  app.use(helmet())
  
  //check access token and add user to res.locals if there is
  app.use(deserializeUser)
  
  //app routes version middleware
  app.use("/api/v1",api)
  return app
}
export default createServer