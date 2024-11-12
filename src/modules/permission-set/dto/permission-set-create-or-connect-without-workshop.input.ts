import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionSetCreateWithoutWorkshopInput } from './permission-set-create-without-workshop.input';

@InputType()
export class PermissionSetCreateOrConnectWithoutWorkshopInput {

    @Field(() => PermissionSetWhereUniqueInput, {nullable:false})
    @Type(() => PermissionSetWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;

    @Field(() => PermissionSetCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => PermissionSetCreateWithoutWorkshopInput)
    create!: PermissionSetCreateWithoutWorkshopInput;
}
