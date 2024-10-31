import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutCustomersInput } from './workshop-update-without-customers.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutCustomersInput } from './workshop-create-without-customers.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutCustomersInput {

    @Field(() => WorkshopUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutCustomersInput)
    update!: WorkshopUpdateWithoutCustomersInput;

    @Field(() => WorkshopCreateWithoutCustomersInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutCustomersInput)
    create!: WorkshopCreateWithoutCustomersInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}