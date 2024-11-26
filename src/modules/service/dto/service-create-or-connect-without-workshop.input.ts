import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutWorkshopInput } from './service-create-without-workshop.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceCreateOrConnectWithoutWorkshopInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => ServiceCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: ServiceCreateWithoutWorkshopInput;
}
