import { z } from "zod"
import { userSchema } from "./users.schemas"
import { realEstateSchema } from "./realEstate.schemas"

const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstate: realEstateSchema,
  user: userSchema.nullish()
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