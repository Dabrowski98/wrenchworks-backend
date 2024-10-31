import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutWorkshopInput } from './service-update-without-workshop.input';

@InputType()
export class ServiceUpdateWithWhereUniqueWithoutWorkshopInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutWorkshopInput)
    data!: ServiceUpdateWithoutWorkshopInput;
}
