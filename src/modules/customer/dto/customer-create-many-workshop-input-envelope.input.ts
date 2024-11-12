import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateManyWorkshopInput } from './customer-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class CustomerCreateManyWorkshopInputEnvelope {

    @Field(() => [CustomerCreateManyWorkshopInput], {nullable:false})
    @Type(() => CustomerCreateManyWorkshopInput)
    data!: Array<CustomerCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
