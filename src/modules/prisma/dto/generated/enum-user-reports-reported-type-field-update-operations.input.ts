import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsReportedType } from './user-reports-reported-type.enum';

@InputType()
export class EnumUserReportsReportedTypeFieldUpdateOperationsInput {

    @Field(() => UserReportsReportedType, {nullable:true})
    set?: keyof typeof UserReportsReportedType;
}
