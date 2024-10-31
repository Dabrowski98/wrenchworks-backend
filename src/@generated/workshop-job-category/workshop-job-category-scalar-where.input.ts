import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class WorkshopJobCategoryScalarWhereInput {

    @Field(() => [WorkshopJobCategoryScalarWhereInput], {nullable:true})
    AND?: Array<WorkshopJobCategoryScalarWhereInput>;

    @Field(() => [WorkshopJobCategoryScalarWhereInput], {nullable:true})
    OR?: Array<WorkshopJobCategoryScalarWhereInput>;

    @Field(() => [WorkshopJobCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<WorkshopJobCategoryScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    categoryId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
