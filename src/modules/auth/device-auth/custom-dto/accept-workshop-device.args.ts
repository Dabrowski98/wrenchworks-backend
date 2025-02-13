import * as Validator from 'class-validator';
import { InputType, Field, ArgsType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AcceptWorkshopDeviceInput } from './accept-workshop-device.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from 'src/modules/workshop/dto/workshop-where-unique.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class AcceptWorkshopDeviceArgs {
  @ValidateNested()
  @Type(() => AcceptWorkshopDeviceInput)
  @Field(() => AcceptWorkshopDeviceInput)
  data!: AcceptWorkshopDeviceInput;

  @Type(() => WorkshopWhereUniqueInput)
  @Field(() => WorkshopWhereUniqueInput)
  where!: Prisma.AtLeast<Prisma.WorkshopWhereUniqueInput, 'workshopId'>;
}
