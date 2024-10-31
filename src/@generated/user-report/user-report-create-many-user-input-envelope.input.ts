import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportCreateManyUserInput } from './user-report-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserReportCreateManyUserInputEnvelope {

    @Field(() => [UserReportCreateManyUserInput], {nullable:false})
    @Type(() => UserReportCreateManyUserInput)
    data!: Array<UserReportCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
