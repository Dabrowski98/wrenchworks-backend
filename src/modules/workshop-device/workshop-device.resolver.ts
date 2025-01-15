import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { WorkshopDeviceService } from './workshop-device.service';
import { WorkshopDevice } from './dto/workshop-device.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { WorkshopDeviceCreateInput } from './dto/workshop-device-create.input';
import { FindUniqueWorkshopDeviceArgs } from './dto/find-unique-workshop-device.args';
import {
  UpdateOneWorkshopDeviceArgs,
  DeleteOneWorkshopDeviceArgs,
  FindManyWorkshopDeviceArgs,
} from './dto';

@Resolver(() => WorkshopDevice)
export class WorkshopDeviceResolver {
  constructor(private readonly workshopDeviceService: WorkshopDeviceService) {}

  @Query(() => WorkshopDevice, { name: 'workshopDevice' })
  findOneWorkshopDevice(@Args() args: FindUniqueWorkshopDeviceArgs) {
    return this.workshopDeviceService.findOne(args);
  }

  @Query(() => [WorkshopDevice])
  findManyWorkshopDevices(@Args() args: FindManyWorkshopDeviceArgs) {
    return this.workshopDeviceService.findMany(args);
  }

  @Query(() => [WorkshopDevice], { name: 'workshopDevices' })
  findAllWorkshopDevices() {
    return this.workshopDeviceService.findAll();
  }

//   @Mutation(() => WorkshopDevice)
//   createWorkshopDevice(
//     @Args('data') data: WorkshopDeviceCreateInput,
//     @Args('workshopId') workshopId: bigint,
//   ) {
//     return this.workshopDeviceService.create(data, workshopId);
//   }

  @Mutation(() => WorkshopDevice)
  updateWorkshopDevice(@Args() args: UpdateOneWorkshopDeviceArgs) {
    return this.workshopDeviceService.update(args);
  }

  @Mutation(() => Boolean)
  deleteWorkshopDevice(@Args() args: DeleteOneWorkshopDeviceArgs) {
    return this.workshopDeviceService.delete(args);
  }

  @Mutation(() => Boolean)
  disableWorkshopDevice(@Args('deviceId') deviceId: bigint) {
    return this.workshopDeviceService.disable(deviceId);
  }

  @Mutation(() => Boolean)
  enableWorkshopDevice(@Args('deviceId') deviceId: bigint) {
    return this.workshopDeviceService.enable(deviceId);
  }

  @ResolveField(() => Workshop)
  workshop(@Parent() workshopDevice: WorkshopDevice) {
    return this.workshopDeviceService.workshop(workshopDevice.workshopDeviceId);
  }
}
