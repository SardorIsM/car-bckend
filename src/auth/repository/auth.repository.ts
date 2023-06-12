import { Inject, Injectable } from '@nestjs/common';
import { KnexConfig } from 'src/knex-config/knex-config';
import { IUser } from '../interface/auth.interface';
import { RegisterDto } from '../dto/auth.dto';


@Injectable()
export class AuthRepository {
    @Inject()
    private readonly knexConfig: KnexConfig;
  

    getUserByEmail(username:string){
        const knex = this.knexConfig.instance;
        return knex.select().from('users').where({ username });  
    }

    register(user:RegisterDto){
        const { username, password, role } = user
        const knex = this.knexConfig.instance
      return knex('users').insert({ username, password, role })
    }
}
