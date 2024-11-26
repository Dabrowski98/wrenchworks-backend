import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestCreateWithoutWorkshopInput } from './join-workshop-request-create-without-workshop.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => JoinWorkshopRequestCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: JoinWorkshopRequestCreateWithoutWorkshopInput;
}
