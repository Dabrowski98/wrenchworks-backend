import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestUpdateWithoutUserInput } from './join-workshop-request-update-without-user.input';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateWithoutUserInput } from './join-workshop-request-create-without-user.input';

@InputType()
export class JoinWorkshopRequestUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestUpdateWithoutUserInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateWithoutUserInput)
    @ValidateNested()
    update!: JoinWorkshopRequestUpdateWithoutUserInput;

    @Field(() => JoinWorkshopRequestCreateWithoutUserInput, {nullable:false})
    @Type(() => JoinWorkshopRequestCreateWithoutUserInput)
    @ValidateNested()
    create!: JoinWorkshopRequestCreateWithoutUserInput;
}
