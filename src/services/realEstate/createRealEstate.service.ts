import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { iRealEstate, iRealEstateRequest } from "../../interfaces/realEstate.interfaces"
import { realEstateSchema } from "../../schemas/realEstate.schemas"

const createRealEstateService = async(realEstateData: iRealEstateRequest):Promise<iRealEstate> => {

  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  const findCategory: Category | null = await categoryRepository.findOneBy({
    id: realEstateData.categoryId
  })

  const newAddress: Address = addressRepository.create(realEstateData.address!)
  await addressRepository.save(newAddress)

  const updatedRealEstate = {
    value: Number(realEstateData.value).toFixed(2),
    size: realEstateData.size,
    address: newAddress,
    category: findCategory!
  }

  const newRealEstate = realEstateRepository.create(updatedRealEstate)
  await realEstateRepository.save(newRealEstate)


  console.log(newRealEstate)
  const realEstateReturn = realEstateSchema.parse(newRealEstate)

  return realEstateReturn

}

export default createRealEstateService