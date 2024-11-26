import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestUpdateWithoutApprovedServiceInput } from './service-request-update-without-approved-service.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateWithoutApprovedServiceInput } from './service-request-create-without-approved-service.input';
import { ServiceRequestWhereInput } from './service-request-where.input';

@InputType()
export class ServiceRequestUpsertWithoutApprovedServiceInput {

    @Field(() => ServiceRequestUpdateWithoutApprovedServiceInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutApprovedServiceInput)
    @ValidateNested()
    update!: ServiceRequestUpdateWithoutApprovedServiceInput;

    @Field(() => ServiceRequestCreateWithoutApprovedServiceInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutApprovedServiceInput)
    @ValidateNested()
    create!: ServiceRequestCreateWithoutApprovedServiceInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;
}
