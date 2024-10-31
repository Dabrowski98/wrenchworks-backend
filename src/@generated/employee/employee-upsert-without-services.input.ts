import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutServicesInput } from './employee-update-without-services.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutServicesInput } from './employee-create-without-services.input';
import { EmployeeWhereInput } from './employee-where.input';

@InputType()
export class EmployeeUpsertWithoutServicesInput {

    @Field(() => EmployeeUpdateWithoutServicesInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutServicesInput)
    update!: EmployeeUpdateWithoutServicesInput;

    @Field(() => EmployeeCreateWithoutServicesInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutServicesInput)
    create!: EmployeeCreateWithoutServicesInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
