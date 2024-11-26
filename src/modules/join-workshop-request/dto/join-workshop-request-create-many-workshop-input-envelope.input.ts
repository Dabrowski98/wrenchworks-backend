import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateManyWorkshopInput } from './join-workshop-request-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class JoinWorkshopRequestCreateManyWorkshopInputEnvelope {

    @Field(() => [JoinWorkshopRequestCreateManyWorkshopInput], {nullable:false})
    @Type(() => JoinWorkshopRequestCreateManyWorkshopInput)
    data!: Array<JoinWorkshopRequestCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
