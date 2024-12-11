import { Module } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UserAuthResolver } from './user-auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { UserLocalStrategy } from './strategies/user-local.strategy';
import { EntityJwtStrategy } from '../auth-common-strategies/entity-jwt.strategy';

@Module({
  imports: [PassportModule, UserModule, JwtModule],
  providers: [
    UserAuthResolver,
    UserAuthService,
    UserLocalStrategy,
    EntityJwtStrategy
  ],
})
export class UserAuthModule {}
