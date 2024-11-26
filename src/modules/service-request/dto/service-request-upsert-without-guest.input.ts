import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestUpdateWithoutGuestInput } from './service-request-update-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestCreateWithoutGuestInput } from './service-request-create-without-guest.input';
import { ServiceRequestWhereInput } from './service-request-where.input';

@InputType()
export class ServiceRequestUpsertWithoutGuestInput {

    @Field(() => ServiceRequestUpdateWithoutGuestInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutGuestInput)
    @ValidateNested()
    update!: ServiceRequestUpdateWithoutGuestInput;

    @Field(() => ServiceRequestCreateWithoutGuestInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutGuestInput)
    @ValidateNested()
    create!: ServiceRequestCreateWithoutGuestInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;
}
