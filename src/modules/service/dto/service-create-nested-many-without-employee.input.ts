import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutEmployeeInput } from './service-create-without-employee.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateOrConnectWithoutEmployeeInput } from './service-create-or-connect-without-employee.input';
import { ServiceCreateManyEmployeeInputEnvelope } from './service-create-many-employee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceCreateNestedManyWithoutEmployeeInput {

    @Field(() => [ServiceCreateWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceCreateWithoutEmployeeInput)
    @ValidateNested()
    create?: Array<ServiceCreateWithoutEmployeeInput>;

    @Field(() => [ServiceCreateOrConnectWithoutEmployeeInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutEmployeeInput)
    @ValidateNested()
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutEmployeeInput>;

    @Field(() => ServiceCreateManyEmployeeInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyEmployeeInputEnvelope)
    @ValidateNested()
    createMany?: ServiceCreateManyEmployeeInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>>;
}
