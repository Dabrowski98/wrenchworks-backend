import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutGuestInput } from './service-request-update-without-guest.input';

@InputType()
export class ServiceRequestUpdateToOneWithWhereWithoutGuestInput {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestUpdateWithoutGuestInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutGuestInput)
    data!: ServiceRequestUpdateWithoutGuestInput;
}
