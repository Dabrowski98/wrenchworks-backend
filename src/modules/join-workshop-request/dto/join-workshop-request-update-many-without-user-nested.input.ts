import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateWithoutUserInput } from './join-workshop-request-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateOrConnectWithoutUserInput } from './join-workshop-request-create-or-connect-without-user.input';
import { JoinWorkshopRequestUpsertWithWhereUniqueWithoutUserInput } from './join-workshop-request-upsert-with-where-unique-without-user.input';
import { JoinWorkshopRequestCreateManyUserInputEnvelope } from './join-workshop-request-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { JoinWorkshopRequestUpdateWithWhereUniqueWithoutUserInput } from './join-workshop-request-update-with-where-unique-without-user.input';
import { JoinWorkshopRequestUpdateManyWithWhereWithoutUserInput } from './join-workshop-request-update-many-with-where-without-user.input';
import { JoinWorkshopRequestScalarWhereInput } from './join-workshop-request-scalar-where.input';

@InputType()
export class JoinWorkshopRequestUpdateManyWithoutUserNestedInput {

    @Field(() => [JoinWorkshopRequestCreateWithoutUserInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<JoinWorkshopRequestCreateWithoutUserInput>;

    @Field(() => [JoinWorkshopRequestCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<JoinWorkshopRequestCreateOrConnectWithoutUserInput>;

    @Field(() => [JoinWorkshopRequestUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpsertWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    upsert?: Array<JoinWorkshopRequestUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => JoinWorkshopRequestCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => JoinWorkshopRequestCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: JoinWorkshopRequestCreateManyUserInputEnvelope;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;

    @Field(() => [JoinWorkshopRequestUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpdateWithWhereUniqueWithoutUserInput)
    @ValidateNested()
    update?: Array<JoinWorkshopRequestUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [JoinWorkshopRequestUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpdateManyWithWhereWithoutUserInput)
    @ValidateNested()
    updateMany?: Array<JoinWorkshopRequestUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [JoinWorkshopRequestScalarWhereInput], {nullable:true})
    @Type(() => JoinWorkshopRequestScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<JoinWorkshopRequestScalarWhereInput>;
}
