import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeTaskCreateManyInput } from './employee-task-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEmployeeTaskArgs {

    @Field(() => [EmployeeTaskCreateManyInput], {nullable:false})
    @Type(() => EmployeeTaskCreateManyInput)
    data!: Array<EmployeeTaskCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
