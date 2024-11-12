import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserReportWhereInput } from './user-report-where.input';
import { Type } from 'class-transformer';
import { UserReportOrderByWithRelationInput } from './user-report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserReportWhereUniqueInput } from './user-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserReportScalarFieldEnum } from './user-report-scalar-field.enum';

@ArgsType()
export class FindFirstUserReportOrThrowArgs {

    @Field(() => UserReportWhereInput, {nullable:true})
    @Type(() => UserReportWhereInput)
    where?: UserReportWhereInput;

    @Field(() => [UserReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserReportOrderByWithRelationInput>;

    @Field(() => UserReportWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserReportWhereUniqueInput, 'reportId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserReportScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserReportScalarFieldEnum>;
}
