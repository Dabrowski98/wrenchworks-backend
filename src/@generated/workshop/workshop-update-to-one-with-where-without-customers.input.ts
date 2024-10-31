import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutCustomersInput } from './workshop-update-without-customers.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutCustomersInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutCustomersInput)
    data!: WorkshopUpdateWithoutCustomersInput;
}
