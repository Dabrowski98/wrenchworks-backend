import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateManyWorkshopInput } from './service-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceCreateManyWorkshopInputEnvelope {

    @Field(() => [ServiceCreateManyWorkshopInput], {nullable:false})
    @Type(() => ServiceCreateManyWorkshopInput)
    data!: Array<ServiceCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
