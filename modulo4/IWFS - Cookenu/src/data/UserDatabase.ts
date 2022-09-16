import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async createUser (user: User){
    try {

        await BaseDatabase.connection('lbn_user')
        .insert({
            id: user.getId(),
            name: user.getname(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()

        })

        
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message)
        
    }
  }  
  public async findUserByEmail(email: string): Promise<User> {
    try {
        const user = await BaseDatabase.connection('lbn_user')
        .select('*')
        .where({email})

        return user[0] && User.toUserModel(user[0])

        
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message)
        
    }
  }

  public async getAllUser(): Promise<User[]>{
    try {
      const users = await BaseDatabase.connection('lbn_user')
      .select(
        'id',
        'name',
        'email',
        'role'
         )
         return users.map((user => User.toUserModel(user)))
      }    
    catch (error:any) {
      throw new Error(error.sqlMessage || error.message)
    }
  
}
}