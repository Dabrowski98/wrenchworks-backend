class UserRoleDto {
  id: bigint;

  name: string;
}

export class UserResponseDto {
  id: bigint;

  username: string;

  roles: UserRoleDto[];
}
