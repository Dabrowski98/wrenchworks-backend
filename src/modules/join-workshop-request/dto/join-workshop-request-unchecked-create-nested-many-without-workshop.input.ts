import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateWithoutWorkshopInput } from './join-workshop-request-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput } from './join-workshop-request-create-or-connect-without-workshop.input';
import { JoinWorkshopRequestCreateManyWorkshopInputEnvelope } from './join-workshop-request-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';

@InputType()
export class JoinWorkshopRequestUncheckedCreateNestedManyWithoutWorkshopInput {

    @Field(() => [JoinWorkshopRequestCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<JoinWorkshopRequestCreateWithoutWorkshopInput>;

    @Field(() => [JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput>;

    @Field(() => JoinWorkshopRequestCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => JoinWorkshopRequestCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: JoinWorkshopRequestCreateManyWorkshopInputEnvelope;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;
}
