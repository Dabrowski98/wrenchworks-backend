import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestUpdateWithoutWorkshopInput } from './join-workshop-request-update-without-workshop.input';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateWithoutWorkshopInput } from './join-workshop-request-create-without-workshop.input';

@InputType()
export class JoinWorkshopRequestUpsertWithWhereUniqueWithoutWorkshopInput {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateWithoutWorkshopInput)
    @ValidateNested()
    update!: JoinWorkshopRequestUpdateWithoutWorkshopInput;

    @Field(() => JoinWorkshopRequestCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => JoinWorkshopRequestCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: JoinWorkshopRequestCreateWithoutWorkshopInput;
}
