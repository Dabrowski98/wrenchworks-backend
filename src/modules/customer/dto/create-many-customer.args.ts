import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCreateManyInput } from './customer-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyCustomerArgs {

    @Field(() => [CustomerCreateManyInput], {nullable:false})
    @Type(() => CustomerCreateManyInput)
    @ValidateNested()
    data!: Array<CustomerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
