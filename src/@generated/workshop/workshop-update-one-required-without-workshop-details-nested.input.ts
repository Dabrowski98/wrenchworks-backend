import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopDetailsInput } from './workshop-create-without-workshop-details.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutWorkshopDetailsInput } from './workshop-create-or-connect-without-workshop-details.input';
import { WorkshopUpsertWithoutWorkshopDetailsInput } from './workshop-upsert-without-workshop-details.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutWorkshopDetailsInput } from './workshop-update-to-one-with-where-without-workshop-details.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutWorkshopDetailsNestedInput {

    @Field(() => WorkshopCreateWithoutWorkshopDetailsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopDetailsInput)
    create?: WorkshopCreateWithoutWorkshopDetailsInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopDetailsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopDetailsInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopDetailsInput;

    @Field(() => WorkshopUpsertWithoutWorkshopDetailsInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutWorkshopDetailsInput)
    upsert?: WorkshopUpsertWithoutWorkshopDetailsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutWorkshopDetailsInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutWorkshopDetailsInput)
    update?: WorkshopUpdateToOneWithWhereWithoutWorkshopDetailsInput;
}
