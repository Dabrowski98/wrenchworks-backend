import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutServicesInput } from './workshop-update-without-services.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutServicesInput } from './workshop-create-without-services.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutServicesInput {

    @Field(() => WorkshopUpdateWithoutServicesInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutServicesInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutServicesInput;

    @Field(() => WorkshopCreateWithoutServicesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutServicesInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutServicesInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
