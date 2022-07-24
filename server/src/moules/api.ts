import express,{Response,Request} from 'express'
import authRoutes from './auth/auth.route'
import userRouter from './user/user.route'
import videoRouter from './videos/video.route'

const api = express.Router()

api.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200))
api.use("/users", userRouter)
api.use("/auth", authRoutes)
api.use("/videos",videoRouter)

export default api