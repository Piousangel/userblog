import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { LocalStorage}
import { PassPort                                    }
@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
