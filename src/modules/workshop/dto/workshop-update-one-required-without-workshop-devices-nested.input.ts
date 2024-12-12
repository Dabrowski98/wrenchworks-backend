import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopDevicesInput } from './workshop-create-without-workshop-devices.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutWorkshopDevicesInput } from './workshop-create-or-connect-without-workshop-devices.input';
import { WorkshopUpsertWithoutWorkshopDevicesInput } from './workshop-upsert-without-workshop-devices.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutWorkshopDevicesInput } from './workshop-update-to-one-with-where-without-workshop-devices.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutWorkshopDevicesNestedInput {

    @Field(() => WorkshopCreateWithoutWorkshopDevicesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopDevicesInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutWorkshopDevicesInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopDevicesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopDevicesInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopDevicesInput;

    @Field(() => WorkshopUpsertWithoutWorkshopDevicesInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutWorkshopDevicesInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutWorkshopDevicesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutWorkshopDevicesInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutWorkshopDevicesInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutWorkshopDevicesInput;
}
