import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutEmployeeInput } from './service-create-without-employee.input';
import { HideField } from '@nestjs/graphql';
import { ServiceCreateOrConnectWithoutEmployeeInput } from './service-create-or-connect-without-employee.input';
import { ServiceCreateManyEmployeeInputEnvelope } from './service-create-many-employee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class ServiceCreateNestedManyWithoutEmployeeInput {

    @HideField()
    create?: Array<ServiceCreateWithoutEmployeeInput>;

    @HideField()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutEmployeeInput>;

    @HideField()
    createMany?: ServiceCreateManyEmployeeInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
