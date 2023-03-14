import { Router } from "express"
import { createScheduleController, readScheduleByIdController } from "../controllers/schedules.controllers"
import { ensureDataIsValidMiddleware, ensureIsAdminMiddleware, ensureTokenIsValidMiddleware } from "../middlewares"
import { createScheduleSchema } from "../schemas/schedules.schemas"

const scheduleRouter: Router = Router()

scheduleRouter.post("",ensureTokenIsValidMiddleware,ensureDataIsValidMiddleware(createScheduleSchema),createScheduleController)
scheduleRouter.get("/realEstate/:id",ensureTokenIsValidMiddleware,ensureIsAdminMiddleware,readScheduleByIdController)

export default scheduleRouter