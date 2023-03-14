import { Router } from "express"
import { createLoginController } from "../controllers/login.controllers"
import { ensureDataIsValidMiddleware } from "../middlewares"
import loginSchema from "../schemas/login.schemas"

const loginRouter: Router = Router()

loginRouter.post("", ensureDataIsValidMiddleware(loginSchema),createLoginController)

export default loginRouter