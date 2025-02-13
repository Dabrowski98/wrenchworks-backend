import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateWithoutUserInput } from './join-workshop-request-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateOrConnectWithoutUserInput } from './join-workshop-request-create-or-connect-without-user.input';
import { HideField } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateManyUserInputEnvelope } from './join-workshop-request-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';

@InputType()
export class JoinWorkshopRequestCreateNestedManyWithoutUserInput {

    @Field(() => [JoinWorkshopRequestCreateWithoutUserInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<JoinWorkshopRequestCreateWithoutUserInput>;

    @HideField()
    connectOrCreate?: Array<JoinWorkshopRequestCreateOrConnectWithoutUserInput>;

    @Field(() => JoinWorkshopRequestCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => JoinWorkshopRequestCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: JoinWorkshopRequestCreateManyUserInputEnvelope;

    @HideField()
    connect?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;
}
