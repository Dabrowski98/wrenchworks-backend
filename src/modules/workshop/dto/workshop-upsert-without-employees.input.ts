import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutEmployeesInput } from './workshop-update-without-employees.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutEmployeesInput } from './workshop-create-without-employees.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutEmployeesInput {

    @Field(() => WorkshopUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutEmployeesInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutEmployeesInput;

    @Field(() => WorkshopCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutEmployeesInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutEmployeesInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
