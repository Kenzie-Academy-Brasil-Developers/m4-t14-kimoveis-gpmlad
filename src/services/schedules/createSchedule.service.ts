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
  const newDate = new Date(scheduleData.date)
  newDate.setHours(+scheduleData.hour.split(":")[0],+scheduleData.hour.split(":")[1])
 
  const newSchedule = {
    date: newDate.toString(),
    hour: `${newDate.getHours()}:${newDate.getMinutes()}`,
    realEstate: findRealEstate!,
    user: findUser!

  }
  const updatedSchedule = scheduleRepository.create(newSchedule)
  await scheduleRepository.save(updatedSchedule)

  console.log(updatedSchedule)
  return updatedSchedule 
}

export default createScheduleService