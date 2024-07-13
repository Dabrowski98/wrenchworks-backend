// import { Resolver, Mutation, Args } from '@nestjs/graphql';
// import { LoginInput } from '../dto/login.dto';
// import { TokenDto } from '../dto/token.dto';
// import { RefreshTokenService } from './refresh-token.resolver';
// import { AuthService } from '../services/auth.service';
// import { JwtService } from '@nestjs/jwt';
// import { UnauthorizedException } from '@nestjs/common';

// @Resolver()
// export class AuthResolver {
//   constructor(
//     private refreshTokenService: RefreshTokenService,
//     private authService: AuthService,
//     private jwtService: JwtService,
//   ) {}

//   @Mutation(() => TokenDto)
//   async login(@Args('loginInput') loginInput: LoginInput): Promise<TokenDto> {
//     const userDto = await this.authService.validateUser(
//       loginInput.username,
//       loginInput.password,
//     );
//     if (!userDto) {
//       throw new UnauthorizedException('Invalid credentials');
//     }
//     const payload = {
//       userId: userDto.id,
//       username: userDto.username,
//       roles: userDto.roles.map((role) => ({ id: role.id, name: role.name })),
//     };

//     const accessToken = this.jwtService.sign(payload);
//     const refreshToken = await this.refreshTokenService.generateRefreshToken(
//       userDto.id,
//       604800,
//     ); // 7 days in seconds

//     return {
//       access_token: accessToken,
//       refresh_token: refreshToken,
//       user_id: userDto.id,
//     };
//   }

//   @Mutation(() => TokenDto)
//   async refresh(@Args('refreshToken') tokenValue: string): Promise<TokenDto> {
//     const refreshToken =
//       await this.refreshTokenService.findTokenByValue(tokenValue);
//     if (!refreshToken) {
//       await this.refreshTokenService.removeRefreshToken(tokenValue);
//       throw new UnauthorizedException('Invalid refresh token');
//     }

//     if (
//       Math.floor(refreshToken.expiresIn.getTime() / 1000) <
//       Math.floor(Date.now() / 1000)
//     ) {
//       await this.refreshTokenService.removeRefreshToken(tokenValue);
//       throw new UnauthorizedException('Expired refresh token');
//     }

//     const user = refreshToken.user;
//     const accessToken =
//       await this.refreshTokenService.generateAccessToken(user);

//     await this.refreshTokenService.removeRefreshToken(tokenValue);
//     const newRefreshToken = await this.refreshTokenService.generateRefreshToken(
//       user.id,
//       604800,
//     ); // 7 days in seconds

//     return {
//       access_token: accessToken,
//       refresh_token: newRefreshToken,
//       user_id: user.id,
//     };
//   }

//   @Mutation(() => String)
//   async logout(@Args('userId') userId: number): Promise<string> {
//     await this.refreshTokenService.removeAllRefreshTokens(userId);
//     return 'User logged out from all devices';
//   }

//   @Mutation(() => String)
//   async logoutSingleDevice(
//     @Args('refreshToken') tokenValue: string,
//   ): Promise<string> {
//     await this.refreshTokenService.removeRefreshToken(tokenValue);
//     return 'Logged out from one device';
//   }
// }
