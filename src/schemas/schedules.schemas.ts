import { z } from "zod"
import { userSchema, requestUserSchema } from "./users.schemas"
import { realEstateRequestSchema, realEstateSchema } from "./realEstate.schemas"

const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstate: realEstateRequestSchema,
  user: requestUserSchema
})

const createScheduleSchema = scheduleSchema.omit({
  id:true,
  realEstate:true,
  user:true
}).extend({
  realEstateId: z.number()
})

export{
  scheduleSchema,
  createScheduleSchema  
}