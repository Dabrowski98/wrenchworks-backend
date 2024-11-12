import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';

@InputType()
export class JobRelationFilter {

    @Field(() => JobWhereInput, {nullable:true})
    is?: JobWhereInput;

    @Field(() => JobWhereInput, {nullable:true})
    isNot?: JobWhereInput;
}
