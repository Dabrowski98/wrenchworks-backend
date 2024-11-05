import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressScalarWhereInput } from './address-scalar-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateManyMutationInput } from './address-update-many-mutation.input';

@InputType()
export class AddressUpdateManyWithWhereWithoutWorkshopsInput {

    @Field(() => AddressScalarWhereInput, {nullable:false})
    @Type(() => AddressScalarWhereInput)
    where!: AddressScalarWhereInput;

    @Field(() => AddressUpdateManyMutationInput, {nullable:false})
    @Type(() => AddressUpdateManyMutationInput)
    data!: AddressUpdateManyMutationInput;
}
