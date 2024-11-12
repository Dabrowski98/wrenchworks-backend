import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestCreateManyInput } from './service-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyServiceRequestArgs {

    @Field(() => [ServiceRequestCreateManyInput], {nullable:false})
    @Type(() => ServiceRequestCreateManyInput)
    data!: Array<ServiceRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
