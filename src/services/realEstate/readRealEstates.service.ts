import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { iRealEstates } from "../../interfaces/realEstate.interfaces"
import { allRealEstate } from "../../schemas/realEstate.schemas"

const readRealEstateService = async():Promise<iRealEstates> => {

  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

  const findRealEstates: Array<RealEstate> = await realEstateRepository.find({
    relations:{
      address: true,
      category: true
    }
  })

  console.log(findRealEstates)

  const realEstates = allRealEstate.parse(findRealEstates)

  return realEstates
}

export default readRealEstateService