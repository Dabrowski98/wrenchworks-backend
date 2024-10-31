import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserReportsStatus } from './user-reports-status.enum';

@InputType()
export class EnumUserReportsStatusFieldUpdateOperationsInput {

    @Field(() => UserReportsStatus, {nullable:true})
    set?: keyof typeof UserReportsStatus;
}
