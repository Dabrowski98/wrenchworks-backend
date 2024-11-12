import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyServiceRequestArgs {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;
}
