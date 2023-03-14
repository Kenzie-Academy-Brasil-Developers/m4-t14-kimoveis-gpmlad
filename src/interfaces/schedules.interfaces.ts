import { z } from "zod"
import { createScheduleSchema, scheduleSchema } from "../schemas/schedules.schemas"

type iSchedule = z.infer<typeof scheduleSchema>
type iScheduleRequest = z.infer<typeof createScheduleSchema>

export{
  iSchedule,
  iScheduleRequest
}