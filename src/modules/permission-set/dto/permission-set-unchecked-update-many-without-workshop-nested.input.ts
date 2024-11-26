import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetCreateWithoutWorkshopInput } from './permission-set-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PermissionSetCreateOrConnectWithoutWorkshopInput } from './permission-set-create-or-connect-without-workshop.input';
import { PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput } from './permission-set-upsert-with-where-unique-without-workshop.input';
import { PermissionSetCreateManyWorkshopInputEnvelope } from './permission-set-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput } from './permission-set-update-with-where-unique-without-workshop.input';
import { PermissionSetUpdateManyWithWhereWithoutWorkshopInput } from './permission-set-update-many-with-where-without-workshop.input';
import { PermissionSetScalarWhereInput } from './permission-set-scalar-where.input';

@InputType()
export class PermissionSetUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [PermissionSetCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<PermissionSetCreateWithoutWorkshopInput>;

    @Field(() => [PermissionSetCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<PermissionSetCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    upsert?: Array<PermissionSetUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => PermissionSetCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => PermissionSetCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: PermissionSetCreateManyWorkshopInputEnvelope;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;

    @Field(() => [PermissionSetWhereUniqueInput], {nullable:true})
    @Type(() => PermissionSetWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>>;

    @Field(() => [PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    update?: Array<PermissionSetUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [PermissionSetUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => PermissionSetUpdateManyWithWhereWithoutWorkshopInput)
    @ValidateNested()
    updateMany?: Array<PermissionSetUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [PermissionSetScalarWhereInput], {nullable:true})
    @Type(() => PermissionSetScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<PermissionSetScalarWhereInput>;
}
