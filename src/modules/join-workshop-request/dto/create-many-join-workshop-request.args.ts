import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateManyInput } from './join-workshop-request-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyJoinWorkshopRequestArgs {

    @Field(() => [JoinWorkshopRequestCreateManyInput], {nullable:false})
    @Type(() => JoinWorkshopRequestCreateManyInput)
    @ValidateNested()
    data!: Array<JoinWorkshopRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
