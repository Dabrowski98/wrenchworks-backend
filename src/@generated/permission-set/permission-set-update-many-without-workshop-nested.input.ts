import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetCreateWithoutWorkshopInput } from './permission-set-create-without-workshop.input';
import { Type } from 'class-transformer';
import { PermissionSetCreateOrConnectWithoutWorkshopInput } from './permission-set-create-or-connect-without-workshop.input';
import { PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput } from './permission-set-upsert-with-where-unique-without-workshop.input';
import { PermissionSetCreateManyWorkshopInputEnvelope } from './permission-set-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput } from './permission-set-update-with-where-unique-without-workshop.input';
import { PermissionSetUpdateManyWithWhereWithoutWorkshopInput } from './permission-set-update-many-with-where-without-workshop.input';
import { PermissionSetScalarWhereInput } from './permission-set-scalar-where.input';

@InputType()
export class PermissionSetUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [PermissionSetCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetCreateWithoutWorkshopInput)
    create?: Array<PermissionSetCreateWithoutWorkshopInput>;

    @Field(() => [PermissionSetCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<PermissionSetCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput)
    upsert?: Array<PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => PermissionSetCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => PermissionSetCreateManyWorkshopInputEnvelope)
    createMany?: PermissionSetCreateManyWorkshopInputEnvelope;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;

    @Field(() => [PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput)
    update?: Array<PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [PermissionSetUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetUpdateManyWithWhereWithoutWorkshopInput)
    updateMany?: Array<PermissionSetUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [PermissionSetScalarWhereInput], {nullable:true})
    @Type(() => PermissionSetScalarWhereInput)
    deleteMany?: Array<PermissionSetScalarWhereInput>;
}
