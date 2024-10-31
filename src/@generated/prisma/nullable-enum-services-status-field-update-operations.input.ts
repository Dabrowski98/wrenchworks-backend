import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicesStatus } from './services-status.enum';

@InputType()
export class NullableEnumServicesStatusFieldUpdateOperationsInput {

    @Field(() => ServicesStatus, {nullable:true})
    set?: keyof typeof ServicesStatus;
}
