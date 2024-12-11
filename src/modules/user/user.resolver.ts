import { Args, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { GraphQLBigInt } from "graphql-scalars";
import { FindUniqueUserArgs, User } from "./dto";


@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async findUser(@Args() args: FindUniqueUserArgs) {
    return this.userService.findUser(args);
  }
}

