import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestCreateWithoutUserInput } from './join-workshop-request-create-without-user.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class JoinWorkshopRequestCreateOrConnectWithoutUserInput {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestCreateWithoutUserInput, {nullable:false})
    @Type(() => JoinWorkshopRequestCreateWithoutUserInput)
    @ValidateNested()
    create!: JoinWorkshopRequestCreateWithoutUserInput;
}
