import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutApprovedServiceInput } from './service-request-update-without-approved-service.input';

@InputType()
export class ServiceRequestUpdateToOneWithWhereWithoutApprovedServiceInput {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestUpdateWithoutApprovedServiceInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutApprovedServiceInput)
    data!: ServiceRequestUpdateWithoutApprovedServiceInput;
}
