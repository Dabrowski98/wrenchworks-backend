import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutJoinWorkshopRequestsInput } from './employee-update-without-join-workshop-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateWithoutJoinWorkshopRequestsInput } from './employee-create-without-join-workshop-requests.input';
import { EmployeeWhereInput } from './employee-where.input';

@InputType()
export class EmployeeUpsertWithoutJoinWorkshopRequestsInput {

    @Field(() => EmployeeUpdateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    update!: EmployeeUpdateWithoutJoinWorkshopRequestsInput;

    @Field(() => EmployeeCreateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutJoinWorkshopRequestsInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
