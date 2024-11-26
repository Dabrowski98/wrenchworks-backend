import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutServiceRequestInput } from './service-create-without-service-request.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceCreateOrConnectWithoutServiceRequestInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceCreateWithoutServiceRequestInput, {nullable:false})
    @Type(() => ServiceCreateWithoutServiceRequestInput)
    @ValidateNested()
    create!: ServiceCreateWithoutServiceRequestInput;
}
