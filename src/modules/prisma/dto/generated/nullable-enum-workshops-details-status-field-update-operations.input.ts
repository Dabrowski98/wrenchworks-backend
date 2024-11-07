import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopsDetailsStatus } from './workshops-details-status.enum';

@InputType()
export class NullableEnumWorkshopsDetailsStatusFieldUpdateOperationsInput {

    @Field(() => WorkshopsDetailsStatus, {nullable:true})
    set?: keyof typeof WorkshopsDetailsStatus;
}
