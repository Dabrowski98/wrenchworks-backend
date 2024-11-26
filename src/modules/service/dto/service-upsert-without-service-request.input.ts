import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceUpdateWithoutServiceRequestInput } from './service-update-without-service-request.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateWithoutServiceRequestInput } from './service-create-without-service-request.input';
import { ServiceWhereInput } from './service-where.input';

@InputType()
export class ServiceUpsertWithoutServiceRequestInput {

    @Field(() => ServiceUpdateWithoutServiceRequestInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutServiceRequestInput)
    @ValidateNested()
    update!: ServiceUpdateWithoutServiceRequestInput;

    @Field(() => ServiceCreateWithoutServiceRequestInput, {nullable:false})
    @Type(() => ServiceCreateWithoutServiceRequestInput)
    @ValidateNested()
    create!: ServiceCreateWithoutServiceRequestInput;

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    where?: ServiceWhereInput;
}
