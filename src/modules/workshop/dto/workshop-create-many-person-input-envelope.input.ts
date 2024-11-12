import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateManyPersonInput } from './workshop-create-many-person.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkshopCreateManyPersonInputEnvelope {

    @Field(() => [WorkshopCreateManyPersonInput], {nullable:false})
    @Type(() => WorkshopCreateManyPersonInput)
    data!: Array<WorkshopCreateManyPersonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
