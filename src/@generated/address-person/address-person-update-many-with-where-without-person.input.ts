import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressPersonScalarWhereInput } from './address-person-scalar-where.input';
import { Type } from 'class-transformer';
import { AddressPersonUpdateManyMutationInput } from './address-person-update-many-mutation.input';

@InputType()
export class AddressPersonUpdateManyWithWhereWithoutPersonInput {

    @Field(() => AddressPersonScalarWhereInput, {nullable:false})
    @Type(() => AddressPersonScalarWhereInput)
    where!: AddressPersonScalarWhereInput;

    @Field(() => AddressPersonUpdateManyMutationInput, {nullable:false})
    @Type(() => AddressPersonUpdateManyMutationInput)
    data!: AddressPersonUpdateManyMutationInput;
}
