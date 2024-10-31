import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereInput } from './service-where.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutServiceRequestInput } from './service-update-without-service-request.input';

@InputType()
export class ServiceUpdateToOneWithWhereWithoutServiceRequestInput {

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    where?: ServiceWhereInput;

    @Field(() => ServiceUpdateWithoutServiceRequestInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutServiceRequestInput)
    data!: ServiceUpdateWithoutServiceRequestInput;
}
