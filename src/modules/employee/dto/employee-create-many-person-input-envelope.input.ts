import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyPersonInput } from './employee-create-many-person.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeCreateManyPersonInputEnvelope {

    @Field(() => [EmployeeCreateManyPersonInput], {nullable:false})
    @Type(() => EmployeeCreateManyPersonInput)
    data!: Array<EmployeeCreateManyPersonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
