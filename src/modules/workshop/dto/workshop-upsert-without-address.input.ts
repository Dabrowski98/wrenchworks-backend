import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutAddressInput } from './workshop-update-without-address.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutAddressInput } from './workshop-create-without-address.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutAddressInput {

    @Field(() => WorkshopUpdateWithoutAddressInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutAddressInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutAddressInput;

    @Field(() => WorkshopCreateWithoutAddressInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutAddressInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutAddressInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
