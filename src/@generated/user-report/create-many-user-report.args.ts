import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportCreateManyInput } from './user-report-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserReportArgs {

    @Field(() => [UserReportCreateManyInput], {nullable:false})
    @Type(() => UserReportCreateManyInput)
    data!: Array<UserReportCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
