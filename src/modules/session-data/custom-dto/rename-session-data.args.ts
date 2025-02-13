import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { SessionDataWhereUniqueInput } from '../dto';
import { RenameSessionDataInput as EditSessionDataInput } from './rename-session-data.input';

@ArgsType()
export class RenameSessionDataArgs {
  @Field(() => EditSessionDataInput)
  @ValidateNested()
  @Type(() => EditSessionDataInput)
  data!: Prisma.AtLeast<EditSessionDataInput, 'deviceName' | 'deviceInfo'>;

  @Field(() => SessionDataWhereUniqueInput, { nullable: false })
  @Type(() => SessionDataWhereUniqueInput)
  where!: Prisma.AtLeast<
    SessionDataWhereUniqueInput,
    'sessionDataId' | 'userId_deviceId'
  >;
}
