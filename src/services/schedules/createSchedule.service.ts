import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { iScheduleRequest } from "../../interfaces/schedules.interfaces"

const createScheduleService = async(scheduleData: iScheduleRequest, userId: number):Promise<any> => {

  const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
  const userRepository: Repository<User> = AppDataSource.getRepository(User)
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

  const findUser = await userRepository.findOne({
    where:{
      id: userId
    }
  })

  const findRealEstate = await realEstateRepository.findOne({
    where:{
      id: scheduleData.realEstateId ? scheduleData.realEstateId : 0
    }
  })


  const newSchedule = scheduleRepository.create({
    user: findUser!,
    realEstate: findRealEstate!,
    date: new Date(scheduleData.date),
    hour: new Date(scheduleData.hour)
  })

  await scheduleRepository.save(newSchedule)

  console.log(newSchedule)

  return newSchedule 
}

export default createScheduleService