import { Field, InputType, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { FindUniqueServiceArgs, ServiceWhereUniqueInput } from '../dto';
import { CloseOneServiceInput } from './close-one-service.input';
import { Prisma } from '@prisma/client';

@ArgsType()
export class CloseOneServiceArgs {
  @Field(() => CloseOneServiceInput)
  @Type(() => CloseOneServiceInput)
  @ValidateNested()
  data!: CloseOneServiceInput;

  @Field(() => ServiceWhereUniqueInput, { nullable: false })
  @Type(() => ServiceWhereUniqueInput)
  where!: Prisma.AtLeast<
    ServiceWhereUniqueInput,
    'serviceId' | 'serviceRequestId'
  >;
}
