import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAu}

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    /**
     * 로그인 요청 -> JWT 토큰 발급
     */
    @UseGuards(LocalAuthGuard)
    @Post('user/login')
    async login(@Request() req){

        return this.authService.login(req.user)
    }

    /**
     *  JWT 검증 후에 사용자 정보 반환
     */
    @UseGuards(JwtA)
    @Get('/profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
