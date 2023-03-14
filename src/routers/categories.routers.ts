import { Router } from "express"
import { createCategoryController, readAllByCategoryController, readAllCategoriesController } from "../controllers/categories.controllers"
import { ensureDataIsValidMiddleware, ensureIsAdminMiddleware, ensureTokenIsValidMiddleware } from "../middlewares"
import ensureCategoryNameIsAvaliableMiddleware from "../middlewares/ensureCategoryNameIsAvaliable.middleware"
import { categoryRequestSchema } from "../schemas/categories.schemas"

const categoryRouter: Router = Router()

categoryRouter.post("",ensureDataIsValidMiddleware(categoryRequestSchema),ensureCategoryNameIsAvaliableMiddleware,ensureTokenIsValidMiddleware,ensureIsAdminMiddleware,createCategoryController)
categoryRouter.get("",readAllCategoriesController)
categoryRouter.get("/:id/realEstate", readAllByCategoryController)

export default categoryRouter