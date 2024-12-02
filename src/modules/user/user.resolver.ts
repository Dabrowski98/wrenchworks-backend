import { Args, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { GraphQLBigInt } from "graphql-scalars";
import { FindUniqueUserArgs } from "./dto";


@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => GraphQLBigInt)
  async findUser(@Args() args: FindUniqueUserArgs) {
    return this.userService.findUser(args);
  }
}

