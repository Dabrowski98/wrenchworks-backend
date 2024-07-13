// import { Injectable } from '@nestjs/common';
// import { UserService } from '../../users/user.service';
// import { UserResponseDto } from '../dto/user-response.dto';
// import {comparePasswords} from '../../../common/helper/bcrypt'

// @Injectable()
// export class AuthService {
//   constructor(private userService: UserService) {}

//   async validateUser(
//     username: string,
//     password: string,
//   ): Promise<UserResponseDto | null> {
//     const user = await this.userService.findUserByUsername(username);
//     if (user && (await comparePasswords(password, user.password))) {
//       const userDto = new UserResponseDto();
//       userDto.id = user.userId;
//       userDto.username = user.username;
//       userDto.roles = user.userRoles.map((userRole) => ({
//         id: userRole.role.id,
//         name: userRole.role.name,
//       }));

//       return userDto;
//     }
//     return null;
//   }
// }
