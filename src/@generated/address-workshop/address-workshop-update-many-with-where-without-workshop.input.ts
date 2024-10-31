import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopScalarWhereInput } from './address-workshop-scalar-where.input';
import { Type } from 'class-transformer';
import { AddressWorkshopUpdateManyMutationInput } from './address-workshop-update-many-mutation.input';

@InputType()
export class AddressWorkshopUpdateManyWithWhereWithoutWorkshopInput {

    @Field(() => AddressWorkshopScalarWhereInput, {nullable:false})
    @Type(() => AddressWorkshopScalarWhereInput)
    where!: AddressWorkshopScalarWhereInput;

    @Field(() => AddressWorkshopUpdateManyMutationInput, {nullable:false})
    @Type(() => AddressWorkshopUpdateManyMutationInput)
    data!: AddressWorkshopUpdateManyMutationInput;
}
