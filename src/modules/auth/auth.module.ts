// require('dotenv').config();
// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from './services/auth.service';
// import { JwtStrategy } from './strategies/jwt.strategy';
// import { LocalStrategy } from './strategies/local.strategy';
// import { AuthResolver } from './resolvers/auth.resolver';
// import { UserModule } from '../users/user.module'
// import { RefreshTokenService } from './services/refresh-token.service';
// import { RefreshToken } from './entities/refresh-token.entity';
// import { Prisma, PrismaClient } from '@prisma/client';
// import { User } from '../users/entities/user.entity'

// @Module({
//   imports: [
//     UserModule,
//     PassportModule,
//     JwtModule.register({
//       secret: process.env.SECRET_KEY,
//       signOptions: { expiresIn: '30m' },
//     }),
//   ],
//   providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy, RefreshTokenService, PrismaClient],
//   exports: [AuthService, JwtModule],
// })
// export class AuthModule {}