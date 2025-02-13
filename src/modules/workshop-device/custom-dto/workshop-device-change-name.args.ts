import { ArgsType, Field } from '@nestjs/graphql';
import {
  FindUniqueWorkshopDeviceArgs,
  WorkshopDeviceWhereUniqueInput,
} from '../dto';
import * as Validator from 'class-validator';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceChangeNameInput } from './workshop-device-change-name.input';

@ArgsType()
export class WorkshopDeviceChangeNameArgs {
  @Field(() => WorkshopDeviceChangeNameInput)
  @ValidateNested()
  @Type(() => WorkshopDeviceChangeNameInput)
  data!: WorkshopDeviceChangeNameInput;

  @Field(() => WorkshopDeviceWhereUniqueInput, { nullable: false })
  @Type(() => WorkshopDeviceWhereUniqueInput)
  where!: Prisma.AtLeast<
    WorkshopDeviceWhereUniqueInput,
    'workshopDeviceId' | 'workshopId_serialNumber'
  >;
}
