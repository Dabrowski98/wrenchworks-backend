import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeePermissionCreateManyInput } from './employee-permission-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyEmployeePermissionArgs {

    @Field(() => [EmployeePermissionCreateManyInput], {nullable:false})
    @Type(() => EmployeePermissionCreateManyInput)
    @ValidateNested()
    data!: Array<EmployeePermissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
