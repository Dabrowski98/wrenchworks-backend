import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestCreateManyInput } from './guest-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyGuestArgs {

    @Field(() => [GuestCreateManyInput], {nullable:false})
    @Type(() => GuestCreateManyInput)
    @ValidateNested()
    data!: Array<GuestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
