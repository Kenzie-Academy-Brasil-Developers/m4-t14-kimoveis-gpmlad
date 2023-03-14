import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"

const readScheduleByIdService = async(realEstateId:number):Promise<any> => {

  const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

  const findRealEstate = await realEstateRepository.find({
    where:{
      id: realEstateId
    },
    relations:{
      schedule: true
    }
  })

  return findRealEstate[0]

}

export default readScheduleByIdService