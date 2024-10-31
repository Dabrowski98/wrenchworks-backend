import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeTaskCreateManyEmployeeInput } from './employee-task-create-many-employee.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskCreateManyEmployeeInputEnvelope {

    @Field(() => [EmployeeTaskCreateManyEmployeeInput], {nullable:false})
    @Type(() => EmployeeTaskCreateManyEmployeeInput)
    data!: Array<EmployeeTaskCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
