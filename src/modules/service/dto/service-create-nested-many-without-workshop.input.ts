import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutWorkshopInput } from './service-create-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { ServiceCreateOrConnectWithoutWorkshopInput } from './service-create-or-connect-without-workshop.input';
import { ServiceCreateManyWorkshopInputEnvelope } from './service-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceCreateNestedManyWithoutWorkshopInput {

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}