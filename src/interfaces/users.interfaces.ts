import {
  allUsersSchema,
  requestUserSchema,
  returnUserSchema,
  updateUserSchema,
  userSchema
} from "../schemas/users.schemas"

import { z } from "zod"
import { DeepPartial } from "typeorm"

type iUser = z.infer<typeof userSchema>
type iUserRequest = z.infer<typeof requestUserSchema>
type iUserReturn = z.infer<typeof returnUserSchema>
type iUsers = z.infer<typeof allUsersSchema>
type iUpdate = z.infer<typeof updateUserSchema>
type iUserUpdate = DeepPartial<iUserRequest>

export {
  iUser,
  iUserRequest,
  iUserReturn,
  iUsers,
  iUserUpdate
}