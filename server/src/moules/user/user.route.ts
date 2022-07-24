import express,{Response,Request} from 'express'
import { processRequestBody } from 'zod-express-middleware'
import requireUser from '../../middleware/requireUser'
import { registerUserHandler } from './user.controller'
import { registerUserSchema } from './user.schema'

const userRouter = express.Router()

userRouter.get("/", requireUser, (req:Request, res:Response) => {
  return res.send(res.locals.user);
}) 
userRouter.post("/", processRequestBody(registerUserSchema.body),registerUserHandler) 

export default userRouter