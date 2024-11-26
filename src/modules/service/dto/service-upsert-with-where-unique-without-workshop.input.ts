import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutWorkshopInput } from './service-update-without-workshop.input';
import { ValidateNested } from 'class-validator';
import { ServiceCreateWithoutWorkshopInput } from './service-create-without-workshop.input';

@InputType()
export class ServiceUpsertWithWhereUniqueWithoutWorkshopInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: ServiceUpdateWithoutWorkshopInput;

    @Field(() => ServiceCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => ServiceCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: ServiceCreateWithoutWorkshopInput;
}
