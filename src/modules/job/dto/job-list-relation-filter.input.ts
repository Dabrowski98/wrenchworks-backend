import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';

@InputType()
export class JobListRelationFilter {

    @Field(() => JobWhereInput, {nullable:true})
    every?: JobWhereInput;

    @Field(() => JobWhereInput, {nullable:true})
    some?: JobWhereInput;

    @Field(() => JobWhereInput, {nullable:true})
    none?: JobWhereInput;
}
