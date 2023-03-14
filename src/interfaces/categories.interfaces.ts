import { z } from "zod"
import { allCategoriesSchema, categoryRequestSchema, categorySchema } from "../schemas/categories.schemas"

type iCategory = z.infer<typeof categorySchema>
type iCategoryRequest = z.infer<typeof categoryRequestSchema>
type iCategories = z.infer<typeof allCategoriesSchema>

export{iCategoryRequest, iCategories,iCategory}