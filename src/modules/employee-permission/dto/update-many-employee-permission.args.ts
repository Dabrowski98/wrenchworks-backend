import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeePermissionUpdateManyMutationInput } from './employee-permission-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeePermissionWhereInput } from './employee-permission-where.input';

@ArgsType()
export class UpdateManyEmployeePermissionArgs {

    @Field(() => EmployeePermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => EmployeePermissionUpdateManyMutationInput)
    @ValidateNested()
    data!: EmployeePermissionUpdateManyMutationInput;

    @Field(() => EmployeePermissionWhereInput, {nullable:true})
    @Type(() => EmployeePermissionWhereInput)
    where?: EmployeePermissionWhereInput;
}
