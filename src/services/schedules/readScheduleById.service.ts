import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Schedule } from "../../entities"

const readScheduleByIdService = async():Promise<any> => {

  const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

}

export default readScheduleByIdService