import { Router } from "express"
import { createRealEstateController, readRealEstateController } from "../controllers/realEstate.controllers"
import { ensureDataIsValidMiddleware, ensureIsAdminMiddleware, ensureTokenIsValidMiddleware } from "../middlewares"
import { realEstateRequestSchema } from "../schemas/realEstate.schemas"

const realEstateRouter: Router = Router()

realEstateRouter.post("",ensureDataIsValidMiddleware(realEstateRequestSchema),ensureTokenIsValidMiddleware,ensureIsAdminMiddleware,createRealEstateController)
realEstateRouter.get("",readRealEstateController)

export default realEstateRouter