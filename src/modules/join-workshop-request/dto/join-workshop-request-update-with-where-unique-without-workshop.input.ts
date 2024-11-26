import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestUpdateWithoutWorkshopInput } from './join-workshop-request-update-without-workshop.input';

@InputType()
export class JoinWorkshopRequestUpdateWithWhereUniqueWithoutWorkshopInput {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestUpdateWithoutWorkshopInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateWithoutWorkshopInput)
    data!: JoinWorkshopRequestUpdateWithoutWorkshopInput;
}
