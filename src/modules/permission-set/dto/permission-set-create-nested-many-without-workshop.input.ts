import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetCreateWithoutWorkshopInput } from './permission-set-create-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { PermissionSetCreateOrConnectWithoutWorkshopInput } from './permission-set-create-or-connect-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PermissionSetCreateManyWorkshopInputEnvelope } from './permission-set-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';

@InputType()
export class PermissionSetCreateNestedManyWithoutWorkshopInput {

    @Field(() => [PermissionSetCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<PermissionSetCreateOrConnectWithoutWorkshopInput>;

    }