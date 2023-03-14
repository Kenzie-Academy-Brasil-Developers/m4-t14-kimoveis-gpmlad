import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../errors"
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
    },
    relations:{
      schedule: true
    }
  })

  if(!findRealEstate){
    throw new AppError("RealEstate not found",404)
  }

  const newDate = new Date(scheduleData.date)
  newDate.setHours(+scheduleData.hour.split(":")[0],+scheduleData.hour.split(":")[1])

  if(+scheduleData.hour.split(":")[0] < 8 || +scheduleData.hour.split(":")[0]> 18){
    throw new AppError("Invalid hour, available times are 8AM to 18PM",400)
  }

  if(newDate.getDay() == 0 || newDate.getDay() == 6){
    throw new AppError("Invalid date, work days are monday to friday",400)
  }

  //console.log(findRealEstate.schedule[0].hour && findRealEstate.schedule[0].date)
  //if(findRealEstate.schedule[0].hour == newDate.toString() && findRealEstate.schedule[0].date == `${newDate.getHours()}:${newDate.getMinutes()}`){
  //  throw new AppError("Schedule to this real estate at this date and time already exists",409)
  //}

  const newSchedule = {
    date: newDate.toString(),
    hour: `${newDate.getHours()}:${newDate.getMinutes()}`,
    realEstate: findRealEstate!,
    user: findUser!

  }
  const updatedSchedule = scheduleRepository.create(newSchedule)
  await scheduleRepository.save(updatedSchedule)

  return {message: "Schedule created"}
}

export default createScheduleService