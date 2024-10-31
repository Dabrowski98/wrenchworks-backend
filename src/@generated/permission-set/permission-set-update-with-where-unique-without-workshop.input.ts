import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionSetUpdateWithoutWorkshopInput } from './permission-set-update-without-workshop.input';

@InputType()
export class PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput {

    @Field(() => PermissionSetWhereUniqueInput, {nullable:false})
    @Type(() => PermissionSetWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;

    @Field(() => PermissionSetUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => PermissionSetUpdateWithoutWorkshopInput)
    data!: PermissionSetUpdateWithoutWorkshopInput;
}
