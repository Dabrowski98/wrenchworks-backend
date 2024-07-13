// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { DatabaseService } from 'src/database/database.service';
// import { RefreshToken } from '../entities/refresh-token.entity';
// import { User } from '../../users/entities/user.entity';
// import * as crypto from 'crypto';

// @Injectable()
// export class RefreshTokenService {
//   constructor(
//     public databaseService: DatabaseService,
//     private jwtService: JwtService,
//   ) {}

//   async generateAccessToken(user: User) {
//     const payload = {
//       userId: user.userId,
//       username: user.username,
//       roles: user.userRoles?.map(role => ({ id: role.role.id, name: role.role.name })),
//     };
    
//     return this.jwtService.sign(payload);
//   }

//   async generateRefreshToken(userId: number, expiresIn: number) {
//     const expiration = new Date();
//     expiration.setTime(expiration.getTime() + expiresIn * 1000);

//     const user = await this.databaseService.user.findOne({ where: { id: userId } });
//     if (!user) {
//       throw new Error('User not found');
//     }

//     const token = crypto.randomBytes(32).toString('hex');

//     const refreshToken = this.databaseService.refreshToken.create({
//       user,
//       token,
//       expiresIn: expiration,
//     });

//     await this.databaseService.refreshToken.save(refreshToken);
//     return refreshToken.token;
//   }

//   async removeRefreshToken(tokenValue: string) {
//     await this.databaseService.refreshToken.delete({ token: tokenValue });
//   }

//   async findTokenById(TokenId: number) {
//     return this.databaseService.refreshToken.findOne({ where: { id: TokenId } });
//   }

//   async findTokenByValue(tokenValue: string) {
//     return this.databaseService.refreshToken.findOne({
//       where: { token: tokenValue },
//       relations: ['user'],
//     });
//   }

//   async removeAllRefreshTokens(userId: number) {
//     await this.databaseService.refreshToken.delete({ user: { id: userId } });
//   }
// }
