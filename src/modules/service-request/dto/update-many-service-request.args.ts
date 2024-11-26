import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestUpdateManyMutationInput } from './service-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestWhereInput } from './service-request-where.input';

@ArgsType()
export class UpdateManyServiceRequestArgs {

    @Field(() => ServiceRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceRequestUpdateManyMutationInput)
    @ValidateNested()
    data!: ServiceRequestUpdateManyMutationInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;
}
