import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDTO } from './dto/userDTO';

@ApiTags('Swagger')
@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @ApiOperation({})
    @Post('/')
    @ApiBody({
        description: 'signup',
        type: 'number',
    })
    postSwagger() {
        return 'this is post swagger page';
    }
    async createUser( @Body() userDTO: UserDTO ){
        
        return await this.userService.createUser(userDTO);
    }
}
