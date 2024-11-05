import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopScalarWhereInput } from './workshop-scalar-where.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateManyMutationInput } from './workshop-update-many-mutation.input';

@InputType()
export class WorkshopUpdateManyWithWhereWithoutAddressesInput {

    @Field(() => WorkshopScalarWhereInput, {nullable:false})
    @Type(() => WorkshopScalarWhereInput)
    where!: WorkshopScalarWhereInput;

    @Field(() => WorkshopUpdateManyMutationInput, {nullable:false})
    @Type(() => WorkshopUpdateManyMutationInput)
    data!: WorkshopUpdateManyMutationInput;
}
