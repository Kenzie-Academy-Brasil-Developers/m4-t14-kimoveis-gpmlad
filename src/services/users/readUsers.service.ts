import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { iUsers } from "../../interfaces/users.interfaces"
import { allUsersSchema } from "../../schemas/users.schemas"

const readUsersService = async():Promise<iUsers> => {

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const findUsers: Array<User> = await userRepository.find()

  const users = allUsersSchema.parse(findUsers)

  return users
}

export default readUsersService