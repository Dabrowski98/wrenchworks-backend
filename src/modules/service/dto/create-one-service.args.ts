import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceCreateInput } from './service-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOneServiceArgs {

    @Field(() => ServiceCreateInput, {nullable:false})
    @Type(() => ServiceCreateInput)
    @Validator.ValidateNested()
    data!: ServiceCreateInput;
}
