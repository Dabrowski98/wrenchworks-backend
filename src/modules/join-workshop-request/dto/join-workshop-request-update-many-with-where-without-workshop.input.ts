import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestScalarWhereInput } from './join-workshop-request-scalar-where.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestUpdateManyMutationInput } from './join-workshop-request-update-many-mutation.input';

@InputType()
export class JoinWorkshopRequestUpdateManyWithWhereWithoutWorkshopInput {

    @Field(() => JoinWorkshopRequestScalarWhereInput, {nullable:false})
    @Type(() => JoinWorkshopRequestScalarWhereInput)
    where!: JoinWorkshopRequestScalarWhereInput;

    @Field(() => JoinWorkshopRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => JoinWorkshopRequestUpdateManyMutationInput)
    data!: JoinWorkshopRequestUpdateManyMutationInput;
}
