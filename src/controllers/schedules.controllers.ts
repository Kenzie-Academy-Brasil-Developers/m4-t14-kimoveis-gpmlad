import { Request, Response } from "express"
import { createScheduleService, readScheduleByIdService } from "../services/schedules"

const createScheduleController = async(request:Request, response:Response):Promise<Response> => {
  const userId: number = request.user.id
  const scheduleData = request.body

  const newSchedule = await createScheduleService(scheduleData,userId)
  return response.status(201).json(newSchedule)
}

const readScheduleByIdController = async(request:Request, response:Response):Promise<Response> => {
  const realEstateId: number = parseInt(request.params.id)
  const schedules = await readScheduleByIdService(realEstateId)

  return response.status(200).json(schedules)
}

export{
  createScheduleController,
  readScheduleByIdController
}