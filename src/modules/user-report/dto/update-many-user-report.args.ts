import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportUpdateManyMutationInput } from './user-report-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserReportWhereInput } from './user-report-where.input';

@ArgsType()
export class UpdateManyUserReportArgs {

    @Field(() => UserReportUpdateManyMutationInput, {nullable:false})
    @Type(() => UserReportUpdateManyMutationInput)
    @ValidateNested()
    data!: UserReportUpdateManyMutationInput;

    @Field(() => UserReportWhereInput, {nullable:true})
    @Type(() => UserReportWhereInput)
    where?: UserReportWhereInput;
}
