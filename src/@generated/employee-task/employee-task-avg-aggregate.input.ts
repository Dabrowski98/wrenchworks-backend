import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeTaskAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;
}
