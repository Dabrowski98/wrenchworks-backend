import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserReportsReportedType } from '../prisma/user-reports-reported-type.enum';
import { UserReportsStatus } from '../prisma/user-reports-status.enum';
import { UserCreateNestedOneWithoutUserReportsInput } from '../user/user-create-nested-one-without-user-reports.input';
import { Type } from 'class-transformer';

@InputType()
export class UserReportCreateInput {

    @HideField()
    reportId?: bigint | number;

    @Field(() => String, {nullable:false})
    reportText!: string;

    @Field(() => UserReportsReportedType, {nullable:false})
    reportedType!: keyof typeof UserReportsReportedType;

    @Field(() => String, {nullable:false})
    reportedId!: bigint | number;

    @Field(() => UserReportsStatus, {nullable:true})
    status?: keyof typeof UserReportsStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserReportsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutUserReportsInput)
    user!: UserCreateNestedOneWithoutUserReportsInput;
}
