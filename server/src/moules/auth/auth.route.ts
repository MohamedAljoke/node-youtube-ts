import express from 'express'
import { processRequestBody } from 'zod-express-middleware';
import { loginHandler } from './auth.controller';
import { loginUserSchema } from './auth.schema';

const authRoutes = express.Router();

authRoutes.post("/", processRequestBody(loginUserSchema.body),loginHandler)

export default authRoutes