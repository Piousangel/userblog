import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ){}

    /**
     * DB에 email 존재 유무 검증
     * email의 pw 정보와 입력정보 일치 여부 검증
     * 
     * @param email 로그인 id
     * @param pass 로그인 password
     */
    async validateUser(email: string, password : string): Promise<any> {
        const user = await this.userService.findOne(email);

        if(user & user.password === password){
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    /**
     * 로그인 요청 사용자에게 JWT access token 발급
     * @param user 로그인을 요청하는 사용자
     */
    async login(user : any) {
        const payload = { email: user.email, sub: user.id, grade : user.grade };

        this.userService.update(user.id);

        return {
            access_token: this.jwtService.sign(payload);
        }
    }
}
