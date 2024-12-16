import { Module } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UserAuthResolver } from './user-auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { UserLocalStrategy } from './strategies/user-local.strategy';
import { UserJwtStrategy } from './strategies/user-jwt.strategy';
import { UserJwtAuthGuard } from './guards/user-jwt-auth.guard';
import { SessionDataModule } from 'src/modules/session-data/session-data.module';

@Module({
  imports: [PassportModule, UserModule, JwtModule, SessionDataModule],
  providers: [
    UserAuthResolver,
    UserAuthService,
    UserLocalStrategy,
    UserJwtStrategy,
    UserJwtAuthGuard,
  ],
  exports: [UserAuthService, UserAuthResolver],
})
export class UserAuthModule {}
