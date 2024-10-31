import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateWithoutServicesInput } from './employee-update-without-services.input';

@InputType()
export class EmployeeUpdateToOneWithWhereWithoutServicesInput {

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;

    @Field(() => EmployeeUpdateWithoutServicesInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutServicesInput)
    data!: EmployeeUpdateWithoutServicesInput;
}
