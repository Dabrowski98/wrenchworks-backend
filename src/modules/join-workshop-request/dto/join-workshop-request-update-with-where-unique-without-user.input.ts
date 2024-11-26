import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestUpdateWithoutUserInput } from './join-workshop-request-update-without-user.input';

@InputType()
export class JoinWorkshopRequestUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestUpdateWithoutUserInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateWithoutUserInput)
    data!: JoinWorkshopRequestUpdateWithoutUserInput;
}
