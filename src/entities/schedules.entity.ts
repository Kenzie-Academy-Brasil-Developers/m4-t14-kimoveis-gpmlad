import { 
  Entity,
  Column, 
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm"
import { RealEstate } from "./realStates.entity"
import { User } from "./users.entity"

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id:number

  @Column()
  date: string

  @Column()
  hour: string

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate

  @ManyToOne(() => User)
  user: User
}

export { Schedule }