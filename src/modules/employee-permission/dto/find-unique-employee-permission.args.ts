import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeePermissionWhereUniqueInput } from './employee-permission-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEmployeePermissionArgs {

    @Field(() => EmployeePermissionWhereUniqueInput, {nullable:false})
    @Type(() => EmployeePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>;
}
