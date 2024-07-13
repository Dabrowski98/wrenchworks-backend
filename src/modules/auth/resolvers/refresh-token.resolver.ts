// import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
// import { RefreshTokenService } from '../services/refresh-token.service';
// import { RefreshToken } from '../entities/refresh-token.entity';
// import { User } from '../../users/entities/user.entity';

// @Resolver(() => RefreshToken)
// export class RefreshTokenResolver {
//   constructor(private readonly refreshTokenService: RefreshTokenService) {}

//   @Mutation(() => String)
//   async generateAccessToken(
//     @Args('userId', { type: () => Int }) userId: number,
//   ) {
//     const user = await this.refreshTokenService.userRepository.findOne({
//       where: { id: userId },
//     });
//     if (!user) {
//       throw new Error('User not found');
//     }
//     return this.refreshTokenService.generateAccessToken(user);
//   }

//   @Mutation(() => String)
//   async generateRefreshToken(
//     @Args('userId', { type: () => Int }) userId: number,
//     @Args('expiresIn', { type: () => Int }) expiresIn: number,
//   ) {
//     return this.refreshTokenService.generateRefreshToken(userId, expiresIn);
//   }

//   @Mutation(() => Boolean)
//   async removeRefreshToken(@Args('tokenValue') tokenValue: string) {
//     await this.refreshTokenService.removeRefreshToken(tokenValue);
//     return true;
//   }

//   @Query(() => RefreshToken, { nullable: true })
//   async findTokenById(@Args('tokenId', { type: () => Int }) tokenId: number) {
//     return this.refreshTokenService.findTokenById(tokenId);
//   }

//   @Query(() => RefreshToken, { nullable: true })
//   async findTokenByValue(@Args('tokenValue') tokenValue: string) {
//     return this.refreshTokenService.findTokenByValue(tokenValue);
//   }

//   @Mutation(() => Boolean)
//   async removeAllRefreshTokens(
//     @Args('userId', { type: () => Int }) userId: number,
//   ) {
//     await this.refreshTokenService.removeAllRefreshTokens(userId);
//     return true;
//   }
// }
