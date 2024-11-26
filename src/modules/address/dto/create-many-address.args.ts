import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressCreateManyInput } from './address-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyAddressArgs {

    @Field(() => [AddressCreateManyInput], {nullable:false})
    @Type(() => AddressCreateManyInput)
    @ValidateNested()
    data!: Array<AddressCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
