import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutServicesInput } from './workshop-create-without-services.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutServicesInput } from './workshop-create-or-connect-without-services.input';
import { WorkshopUpsertWithoutServicesInput } from './workshop-upsert-without-services.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutServicesInput } from './workshop-update-to-one-with-where-without-services.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutServicesNestedInput {

    @Field(() => WorkshopCreateWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutServicesInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutServicesInput;

    @Field(() => WorkshopCreateOrConnectWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutServicesInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutServicesInput;

    @Field(() => WorkshopUpsertWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutServicesInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutServicesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutServicesInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutServicesInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutServicesInput;
}
