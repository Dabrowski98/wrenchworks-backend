import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutJoinWorkshopRequestsInput } from './employee-update-without-join-workshop-requests.input';

@InputType()
export class EmployeeUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput {

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;

    @Field(() => EmployeeUpdateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutJoinWorkshopRequestsInput)
    data!: EmployeeUpdateWithoutJoinWorkshopRequestsInput;
}
