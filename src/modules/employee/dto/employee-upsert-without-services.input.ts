import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutServicesInput } from './employee-update-without-services.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateWithoutServicesInput } from './employee-create-without-services.input';
import { EmployeeWhereInput } from './employee-where.input';

@InputType()
export class EmployeeUpsertWithoutServicesInput {

    @Field(() => EmployeeUpdateWithoutServicesInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutServicesInput)
    @ValidateNested()
    update!: EmployeeUpdateWithoutServicesInput;

    @Field(() => EmployeeCreateWithoutServicesInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutServicesInput)
    @ValidateNested()
    create!: EmployeeCreateWithoutServicesInput;

    @Field(() => EmployeeWhereInput, {nullable:true})
    @Type(() => EmployeeWhereInput)
    where?: EmployeeWhereInput;
}
