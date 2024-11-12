import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutEmployeesInput } from './workshop-create-without-employees.input';

@InputType()
export class WorkshopCreateOrConnectWithoutEmployeesInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutEmployeesInput)
    create!: WorkshopCreateWithoutEmployeesInput;
}
