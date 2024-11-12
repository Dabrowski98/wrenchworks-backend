import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateManyWorkshopInput } from './service-request-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestCreateManyWorkshopInputEnvelope {

    @Field(() => [ServiceRequestCreateManyWorkshopInput], {nullable:false})
    @Type(() => ServiceRequestCreateManyWorkshopInput)
    data!: Array<ServiceRequestCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
