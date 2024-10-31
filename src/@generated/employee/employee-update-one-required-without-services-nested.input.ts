import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutServicesInput } from './employee-create-without-services.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutServicesInput } from './employee-create-or-connect-without-services.input';
import { EmployeeUpsertWithoutServicesInput } from './employee-upsert-without-services.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateToOneWithWhereWithoutServicesInput } from './employee-update-to-one-with-where-without-services.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutServicesNestedInput {

    @Field(() => EmployeeCreateWithoutServicesInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutServicesInput)
    create?: EmployeeCreateWithoutServicesInput;

    @Field(() => EmployeeCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutServicesInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutServicesInput;

    @Field(() => EmployeeUpsertWithoutServicesInput, {nullable:true})
    @Type(() => EmployeeUpsertWithoutServicesInput)
    upsert?: EmployeeUpsertWithoutServicesInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>;

    @Field(() => EmployeeUpdateToOneWithWhereWithoutServicesInput, {nullable:true})
    @Type(() => EmployeeUpdateToOneWithWhereWithoutServicesInput)
    update?: EmployeeUpdateToOneWithWhereWithoutServicesInput;
}
