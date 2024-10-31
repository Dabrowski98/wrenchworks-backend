import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeTaskUpdateManyMutationInput } from './employee-task-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EmployeeTaskWhereInput } from './employee-task-where.input';

@ArgsType()
export class UpdateManyEmployeeTaskArgs {

    @Field(() => EmployeeTaskUpdateManyMutationInput, {nullable:false})
    @Type(() => EmployeeTaskUpdateManyMutationInput)
    data!: EmployeeTaskUpdateManyMutationInput;

    @Field(() => EmployeeTaskWhereInput, {nullable:true})
    @Type(() => EmployeeTaskWhereInput)
    where?: EmployeeTaskWhereInput;
}
