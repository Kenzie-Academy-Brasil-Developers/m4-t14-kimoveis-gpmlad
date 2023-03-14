import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { iUserRequest, iUserReturn } from "../../interfaces/users.interfaces"
import { returnUserSchema } from "../../schemas/users.schemas"

const createUserService = async(userData:iUserRequest):Promise<iUserReturn> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User = userRepository.create(userData)

  await userRepository.save(user)

  const newUser = returnUserSchema.parse(user)

  return newUser
}

export default createUserService