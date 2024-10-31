import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutEmployeesInput } from './workshop-update-without-employees.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutEmployeesInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutEmployeesInput)
    data!: WorkshopUpdateWithoutEmployeesInput;
}
