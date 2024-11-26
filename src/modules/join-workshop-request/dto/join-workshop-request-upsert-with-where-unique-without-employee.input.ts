import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestUpdateWithoutEmployeeInput } from './join-workshop-request-update-without-employee.input';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateWithoutEmployeeInput } from './join-workshop-request-create-without-employee.input';

@InputType()
export class JoinWorkshopRequestUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:false})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    where!: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

    @Field(() => JoinWorkshopRequestUpdateWithoutEmployeeInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateWithoutEmployeeInput)
    @ValidateNested()
    update!: JoinWorkshopRequestUpdateWithoutEmployeeInput;

    @Field(() => JoinWorkshopRequestCreateWithoutEmployeeInput, {nullable:false})
    @Type(() => JoinWorkshopRequestCreateWithoutEmployeeInput)
    @ValidateNested()
    create!: JoinWorkshopRequestCreateWithoutEmployeeInput;
}
