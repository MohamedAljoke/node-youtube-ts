import express, { Response, Request } from 'express'
import requireUser from '../../middleware/requireUser'
import { findAllVideosHandler, streamVideoHandler, updateVideoHandler, uploadVideoHanler } from './video.controller'

const videoRouter = express.Router()

videoRouter.get("/", findAllVideosHandler)
videoRouter.get("/:videoId",streamVideoHandler)
videoRouter.post('/', requireUser, uploadVideoHanler)
videoRouter.patch("/:videoId", requireUser, updateVideoHandler)

export default videoRouter