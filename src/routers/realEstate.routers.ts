import { Router } from "express"
import { createRealEstateController } from "../controllers/realEstate.controllers"

const realEstateRouter: Router = Router()

realEstateRouter.post("",createRealEstateController)
realEstateRouter.get("",)

export default realEstateRouter