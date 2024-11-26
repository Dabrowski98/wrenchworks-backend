import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateManyEmployeeInput } from './join-workshop-request-create-many-employee.input';
import { Type } from 'class-transformer';

@InputType()
export class JoinWorkshopRequestCreateManyEmployeeInputEnvelope {

    @Field(() => [JoinWorkshopRequestCreateManyEmployeeInput], {nullable:false})
    @Type(() => JoinWorkshopRequestCreateManyEmployeeInput)
    data!: Array<JoinWorkshopRequestCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
