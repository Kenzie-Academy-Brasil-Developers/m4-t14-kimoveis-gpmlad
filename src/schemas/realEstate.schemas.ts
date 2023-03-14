import { z } from "zod"
import { addressSchema, createAddressSchema } from "./address.schemas"
import { categorySchema } from "./categories.schemas"

const realEstateSchema = z.object({
  id: z.number(),
  value: z.string(),
  size: z.number().int().positive(),
  address: addressSchema,
  category: categorySchema.nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  sold: z.boolean().default(false)
})

const realEstateRequestSchema = realEstateSchema.omit({id:true, category: true, createdAt:true, updatedAt:true, sold:true}).extend({address: createAddressSchema, categoryId:z.number().nullish(), value: z.number().or(z.string())})

const allRealEstate = z.array(realEstateSchema)

export{realEstateSchema, realEstateRequestSchema, allRealEstate}