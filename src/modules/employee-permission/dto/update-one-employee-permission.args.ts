import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeePermissionUpdateInput } from './employee-permission-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { EmployeePermissionWhereUniqueInput } from './employee-permission-where-unique.input';

@ArgsType()
export class UpdateOneEmployeePermissionArgs {

    @Field(() => EmployeePermissionUpdateInput, {nullable:false})
    @Type(() => EmployeePermissionUpdateInput)
    @ValidateNested()
    data!: EmployeePermissionUpdateInput;

    @Field(() => EmployeePermissionWhereUniqueInput, {nullable:false})
    @Type(() => EmployeePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>;
}
