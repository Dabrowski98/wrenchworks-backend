import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopUpdateWithoutWorkshopPCsInput } from './workshop-update-without-workshop-p-cs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutWorkshopPCsInput } from './workshop-create-without-workshop-p-cs.input';
import { WorkshopWhereInput } from './workshop-where.input';

@InputType()
export class WorkshopUpsertWithoutWorkshopPCsInput {

    @Field(() => WorkshopUpdateWithoutWorkshopPCsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopPCsInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutWorkshopPCsInput;

    @Field(() => WorkshopCreateWithoutWorkshopPCsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopPCsInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutWorkshopPCsInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;
}
