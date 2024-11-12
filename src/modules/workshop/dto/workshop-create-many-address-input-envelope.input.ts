import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateManyAddressInput } from './workshop-create-many-address.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopCreateManyAddressInputEnvelope {

    @Field(() => [WorkshopCreateManyAddressInput], {nullable:false})
    @Type(() => WorkshopCreateManyAddressInput)
    data!: Array<WorkshopCreateManyAddressInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
