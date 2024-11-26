import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportCreateInput } from './user-report-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneUserReportArgs {

    @Field(() => UserReportCreateInput, {nullable:false})
    @Type(() => UserReportCreateInput)
    @ValidateNested()
    data!: UserReportCreateInput;
}
