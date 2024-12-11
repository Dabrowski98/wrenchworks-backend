import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceCreateWithoutWorkshopInput } from './workshop-device-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceCreateOrConnectWithoutWorkshopInput } from './workshop-device-create-or-connect-without-workshop.input';
import { WorkshopDeviceUpsertWithWhereUniqueWithoutWorkshopInput } from './workshop-device-upsert-with-where-unique-without-workshop.input';
import { WorkshopDeviceCreateManyWorkshopInputEnvelope } from './workshop-device-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceWhereUniqueInput } from './workshop-device-where-unique.input';
import { WorkshopDeviceUpdateWithWhereUniqueWithoutWorkshopInput } from './workshop-device-update-with-where-unique-without-workshop.input';
import { WorkshopDeviceUpdateManyWithWhereWithoutWorkshopInput } from './workshop-device-update-many-with-where-without-workshop.input';
import { WorkshopDeviceScalarWhereInput } from './workshop-device-scalar-where.input';

@InputType()
export class WorkshopDeviceUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [WorkshopDeviceCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopDeviceCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<WorkshopDeviceCreateWithoutWorkshopInput>;

    @Field(() => [WorkshopDeviceCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopDeviceCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<WorkshopDeviceCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [WorkshopDeviceUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopDeviceUpsertWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    upsert?: Array<WorkshopDeviceUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => WorkshopDeviceCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => WorkshopDeviceCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: WorkshopDeviceCreateManyWorkshopInputEnvelope;

    @Field(() => [WorkshopDeviceWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>>;

    @Field(() => [WorkshopDeviceWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>>;

    @Field(() => [WorkshopDeviceWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>>;

    @Field(() => [WorkshopDeviceWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>>;

    @Field(() => [WorkshopDeviceUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopDeviceUpdateWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    update?: Array<WorkshopDeviceUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [WorkshopDeviceUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopDeviceUpdateManyWithWhereWithoutWorkshopInput)
    @ValidateNested()
    updateMany?: Array<WorkshopDeviceUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [WorkshopDeviceScalarWhereInput], {nullable:true})
    @Type(() => WorkshopDeviceScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<WorkshopDeviceScalarWhereInput>;
}
