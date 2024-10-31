import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopCreateManyWorkshopInput } from './address-workshop-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class AddressWorkshopCreateManyWorkshopInputEnvelope {

    @Field(() => [AddressWorkshopCreateManyWorkshopInput], {nullable:false})
    @Type(() => AddressWorkshopCreateManyWorkshopInput)
    data!: Array<AddressWorkshopCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
