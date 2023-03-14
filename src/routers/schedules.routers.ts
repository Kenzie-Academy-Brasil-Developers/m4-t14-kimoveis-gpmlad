import { Router } from "express"
import { createScheduleController, readScheduleByIdController } from "../controllers/schedules.controllers"
import { ensureIsAdminMiddleware, ensureTokenIsValidMiddleware } from "../middlewares"

const scheduleRouter: Router = Router()

scheduleRouter.post("",createScheduleController)
scheduleRouter.get("/realEstate/:id",ensureTokenIsValidMiddleware,ensureIsAdminMiddleware,readScheduleByIdController)

export default scheduleRouter