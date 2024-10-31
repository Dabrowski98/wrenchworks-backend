import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeTaskScalarWhereInput } from './employee-task-scalar-where.input';
import { Type } from 'class-transformer';
import { EmployeeTaskUpdateManyMutationInput } from './employee-task-update-many-mutation.input';

@InputType()
export class EmployeeTaskUpdateManyWithWhereWithoutEmployeeInput {

    @Field(() => EmployeeTaskScalarWhereInput, {nullable:false})
    @Type(() => EmployeeTaskScalarWhereInput)
    where!: EmployeeTaskScalarWhereInput;

    @Field(() => EmployeeTaskUpdateManyMutationInput, {nullable:false})
    @Type(() => EmployeeTaskUpdateManyMutationInput)
    data!: EmployeeTaskUpdateManyMutationInput;
}
