import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ChangePasswordInput } from '../../common-dto/change-password.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from 'src/modules/user/dto';

@ArgsType()
export class ChangeUserPasswordArgs {
  @Field(() => ChangePasswordInput)
  @ValidateNested()
  @Type(() => ChangePasswordInput)
  data!: ChangePasswordInput;

  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId'>;
}
