import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutEmployeesInput } from './workshop-create-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutEmployeesInput } from './workshop-create-or-connect-without-employees.input';
import { WorkshopUpsertWithoutEmployeesInput } from './workshop-upsert-without-employees.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutEmployeesInput } from './workshop-update-to-one-with-where-without-employees.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutEmployeesNestedInput {

    @Field(() => WorkshopCreateWithoutEmployeesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutEmployeesInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutEmployeesInput;

    @Field(() => WorkshopCreateOrConnectWithoutEmployeesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutEmployeesInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutEmployeesInput;

    @Field(() => WorkshopUpsertWithoutEmployeesInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutEmployeesInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutEmployeesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutEmployeesInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutEmployeesInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutEmployeesInput;
}
