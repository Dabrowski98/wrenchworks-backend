import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutUserInput } from './workshop-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutUserInput } from './workshop-create-or-connect-without-user.input';
import { WorkshopUpsertWithWhereUniqueWithoutUserInput } from './workshop-upsert-with-where-unique-without-user.input';
import { WorkshopCreateManyUserInputEnvelope } from './workshop-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateWithWhereUniqueWithoutUserInput } from './workshop-update-with-where-unique-without-user.input';
import { WorkshopUpdateManyWithWhereWithoutUserInput } from './workshop-update-many-with-where-without-user.input';
import { WorkshopScalarWhereInput } from './workshop-scalar-where.input';

@InputType()
export class WorkshopUpdateManyWithoutUserNestedInput {

    @Field(() => [WorkshopCreateWithoutUserInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<WorkshopCreateWithoutUserInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutUserInput>;

    @Field(() => [WorkshopUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WorkshopUpsertWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    upsert?: Array<WorkshopUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => WorkshopCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WorkshopCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: WorkshopCreateManyUserInputEnvelope;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>>;

    @Field(() => [WorkshopUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => WorkshopUpdateWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    update?: Array<WorkshopUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [WorkshopUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => WorkshopUpdateManyWithWhereWithoutUserInput)
    @ValidateNested()
    updateMany?: Array<WorkshopUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [WorkshopScalarWhereInput], {nullable:true})
    @Type(() => WorkshopScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<WorkshopScalarWhereInput>;
}
