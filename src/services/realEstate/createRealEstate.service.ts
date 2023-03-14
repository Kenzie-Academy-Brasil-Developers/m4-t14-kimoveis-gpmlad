import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { iRealEstateRequest } from "../../interfaces/realEstate.interfaces"

const createRealEstateService = async(realEstateData: iRealEstateRequest):Promise<RealEstate> => {

  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  console.log(realEstateData)

  const findOneAddress = await addressRepository.find({
    where:{
      street: realEstateData.address.street  
    }
  })

  if(findOneAddress.length > 1){
    throw new AppError("Já existe",409)
  }

  const findCategory: Category | null = await categoryRepository.findOneBy({
    id: realEstateData.categoryId ? realEstateData.categoryId : 0
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

  return newRealEstate
}

export default createRealEstateService