import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutJoinWorkshopRequestsInput } from './employee-create-without-join-workshop-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutJoinWorkshopRequestsInput } from './employee-create-or-connect-without-join-workshop-requests.input';
import { EmployeeUpsertWithoutJoinWorkshopRequestsInput } from './employee-upsert-without-join-workshop-requests.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput } from './employee-update-to-one-with-where-without-join-workshop-requests.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutJoinWorkshopRequestsNestedInput {

    @Field(() => EmployeeCreateWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create?: EmployeeCreateWithoutJoinWorkshopRequestsInput;

    @Field(() => EmployeeCreateOrConnectWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    connectOrCreate?: EmployeeCreateOrConnectWithoutJoinWorkshopRequestsInput;

    @Field(() => EmployeeUpsertWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => EmployeeUpsertWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    upsert?: EmployeeUpsertWithoutJoinWorkshopRequestsInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>;

    @Field(() => EmployeeUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => EmployeeUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    update?: EmployeeUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput;
}
