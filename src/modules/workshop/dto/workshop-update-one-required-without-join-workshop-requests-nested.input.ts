import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutJoinWorkshopRequestsInput } from './workshop-create-without-join-workshop-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutJoinWorkshopRequestsInput } from './workshop-create-or-connect-without-join-workshop-requests.input';
import { WorkshopUpsertWithoutJoinWorkshopRequestsInput } from './workshop-upsert-without-join-workshop-requests.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput } from './workshop-update-to-one-with-where-without-join-workshop-requests.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutJoinWorkshopRequestsNestedInput {

    @Field(() => WorkshopCreateWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutJoinWorkshopRequestsInput;

    @Field(() => WorkshopCreateOrConnectWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutJoinWorkshopRequestsInput;

    @Field(() => WorkshopUpsertWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutJoinWorkshopRequestsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput;
}
