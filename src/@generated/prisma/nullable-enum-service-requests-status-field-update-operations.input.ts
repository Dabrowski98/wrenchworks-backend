import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestsStatus } from './service-requests-status.enum';

@InputType()
export class NullableEnumServiceRequestsStatusFieldUpdateOperationsInput {

    @Field(() => ServiceRequestsStatus, {nullable:true})
    set?: keyof typeof ServiceRequestsStatus;
}
