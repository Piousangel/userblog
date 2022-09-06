import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/userDTO';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        
        @InjectRepository(User)
        private userRepository : Repository<User>,
    ){}

    async createUser( userDTO : UserDTO){

        return await this.userRepository.save(userDTO);
    }
}
