import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestUpdateWithoutEmployeeInput } from './join-workshop-request-update-without-employee.input';

@InputType()
export class JoinWorkshopRequestUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestUpdateWithoutEmployeeInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateWithoutEmployeeInput)
    data!: JoinWorkshopRequestUpdateWithoutEmployeeInput;
}
