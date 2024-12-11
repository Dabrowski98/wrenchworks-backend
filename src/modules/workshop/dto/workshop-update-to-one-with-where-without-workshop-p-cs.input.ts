import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutWorkshopPCsInput } from './workshop-update-without-workshop-p-cs.input';

@InputType()
export class WorkshopUpdateToOneWithWhereWithoutWorkshopPCsInput {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => WorkshopUpdateWithoutWorkshopPCsInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutWorkshopPCsInput)
    data!: WorkshopUpdateWithoutWorkshopPCsInput;
}
