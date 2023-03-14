import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { iRealEstates } from "../../interfaces/realEstate.interfaces"
import { allRealEstate } from "../../schemas/realEstate.schemas"

const readRealEstateService = async():Promise<RealEstate[]> => {

  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

  const findRealEstates: Array<RealEstate> = await realEstateRepository.find({
    relations:{
      address: true
    }
  })
  return findRealEstates
}

export default readRealEstateService