import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerUpdateManyMutationInput } from './customer-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerWhereInput } from './customer-where.input';

@ArgsType()
export class UpdateManyCustomerArgs {

    @Field(() => CustomerUpdateManyMutationInput, {nullable:false})
    @Type(() => CustomerUpdateManyMutationInput)
    @ValidateNested()
    data!: CustomerUpdateManyMutationInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;
}
