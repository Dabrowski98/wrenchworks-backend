import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionSetUpdateWithoutWorkshopInput } from './permission-set-update-without-workshop.input';
import { ValidateNested } from 'class-validator';
import { PermissionSetCreateWithoutWorkshopInput } from './permission-set-create-without-workshop.input';

@InputType()
export class PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput {

    @Field(() => PermissionSetWhereUniqueInput, {nullable:false})
    @Type(() => PermissionSetWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;

    @Field(() => PermissionSetUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => PermissionSetUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: PermissionSetUpdateWithoutWorkshopInput;

    @Field(() => PermissionSetCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => PermissionSetCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: PermissionSetCreateWithoutWorkshopInput;
}
