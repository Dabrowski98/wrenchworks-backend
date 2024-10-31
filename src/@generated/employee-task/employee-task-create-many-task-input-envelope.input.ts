import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeTaskCreateManyTaskInput } from './employee-task-create-many-task.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeTaskCreateManyTaskInputEnvelope {

    @Field(() => [EmployeeTaskCreateManyTaskInput], {nullable:false})
    @Type(() => EmployeeTaskCreateManyTaskInput)
    data!: Array<EmployeeTaskCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
