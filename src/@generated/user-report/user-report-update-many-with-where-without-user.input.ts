import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportScalarWhereInput } from './user-report-scalar-where.input';
import { Type } from 'class-transformer';
import { UserReportUpdateManyMutationInput } from './user-report-update-many-mutation.input';

@InputType()
export class UserReportUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserReportScalarWhereInput, {nullable:false})
    @Type(() => UserReportScalarWhereInput)
    where!: UserReportScalarWhereInput;

    @Field(() => UserReportUpdateManyMutationInput, {nullable:false})
    @Type(() => UserReportUpdateManyMutationInput)
    data!: UserReportUpdateManyMutationInput;
}
