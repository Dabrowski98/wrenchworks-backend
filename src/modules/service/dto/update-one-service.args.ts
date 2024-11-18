import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceUpdateInput } from './service-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOneServiceArgs {

    @Field(() => ServiceUpdateInput, {nullable:false})
    @Type(() => ServiceUpdateInput)
    @Validator.ValidateNested()
    data!: ServiceUpdateInput;

    @Field(() => ServiceWhereUniqueInput, { nullable: false })
    @Type(() => ServiceWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;
}
