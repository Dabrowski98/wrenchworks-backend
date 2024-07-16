import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Customer } from '../../customer/entities/customer.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';
import { Workshop } from '../../workshop/entities/workshop.entity';
import { Task } from '../../task/entities/task.entity';
import { ServiceRequest } from '../../service-request/entities/service-request.entity';
import { ServicesStatus } from '@prisma/client';

@ObjectType()
export class Service {
  @Field(() => BigInt)
  serviceId: bigint;

  @Field(() => BigInt, { nullable: true })
  serviceRequestId?: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => BigInt)
  vehicleId: bigint;

  @Field(() => BigInt)
  customerId: bigint;

  @Field(() => BigInt)
  employeeId: bigint;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ServicesStatus)
  status: ServicesStatus;

  @Field()
  payedOff: boolean;

  @Field()
  paymentAmount: number;

  @Field()
  serviceStartDate: Date;

  @Field({ nullable: true })
  serviceEndDate?: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => ServiceRequest, { nullable: true })
  serviceRequest?: ServiceRequest;

  @Field(() => [Task])
  tasks: Task[];

  @Field(() => Customer)
  customer: Customer;

  @Field(() => Employee)
  employee: Employee;

  @Field(() => Vehicle)
  vehicle: Vehicle;

  @Field(() => Workshop)
  workshop: Workshop;
}

registerEnumType(ServicesStatus, {
  name: 'ServicesStatus',
});