import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetCreateWithoutWorkshopInput } from './permission-set-create-without-workshop.input';
import { Type } from 'class-transformer';
import { PermissionSetCreateOrConnectWithoutWorkshopInput } from './permission-set-create-or-connect-without-workshop.input';
import { PermissionSetCreateManyWorkshopInputEnvelope } from './permission-set-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';

@InputType()
export class PermissionSetCreateNestedManyWithoutWorkshopInput {

    @Field(() => [PermissionSetCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetCreateWithoutWorkshopInput)
    create?: Array<PermissionSetCreateWithoutWorkshopInput>;

    @Field(() => [PermissionSetCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<PermissionSetCreateOrConnectWithoutWorkshopInput>;

    @Field(() => PermissionSetCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => PermissionSetCreateManyWorkshopInputEnvelope)
    createMany?: PermissionSetCreateManyWorkshopInputEnvelope;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;
}
