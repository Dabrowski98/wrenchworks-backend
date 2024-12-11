import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopPCsInput } from './workshop-create-without-workshop-p-cs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutWorkshopPCsInput } from './workshop-create-or-connect-without-workshop-p-cs.input';
import { WorkshopUpsertWithoutWorkshopPCsInput } from './workshop-upsert-without-workshop-p-cs.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutWorkshopPCsInput } from './workshop-update-to-one-with-where-without-workshop-p-cs.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutWorkshopPCsNestedInput {

    @Field(() => WorkshopCreateWithoutWorkshopPCsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopPCsInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutWorkshopPCsInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopPCsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopPCsInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopPCsInput;

    @Field(() => WorkshopUpsertWithoutWorkshopPCsInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutWorkshopPCsInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutWorkshopPCsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutWorkshopPCsInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutWorkshopPCsInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutWorkshopPCsInput;
}
