import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestJobWhereInput } from './service-request-job-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyServiceRequestJobArgs {

    @Field(() => ServiceRequestJobWhereInput, {nullable:true})
    @Type(() => ServiceRequestJobWhereInput)
    where?: ServiceRequestJobWhereInput;
}
