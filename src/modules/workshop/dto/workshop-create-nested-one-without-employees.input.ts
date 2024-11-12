import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutEmployeesInput } from './workshop-create-without-employees.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutEmployeesInput } from './workshop-create-or-connect-without-employees.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutEmployeesInput {

    @Field(() => WorkshopCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutEmployeesInput)
    create?: WorkshopCreateWithoutEmployeesInput;

    @Field(() => WorkshopCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutEmployeesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
