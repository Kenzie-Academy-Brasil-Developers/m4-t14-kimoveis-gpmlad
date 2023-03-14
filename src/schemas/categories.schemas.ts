import { z } from "zod"

const categorySchema = z.object({
  id:z.number(),
  name: z.string().max(45)
})

const categoryRequestSchema = categorySchema.omit({id:true})

const allCategoriesSchema = z.array(categorySchema)

const categoriesByIdSchema = z.object({
  id:z.number(),
  name: z.string().max(45),
  
})

export {categorySchema,allCategoriesSchema,categoryRequestSchema}