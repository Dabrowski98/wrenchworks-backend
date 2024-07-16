import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';
import { Workshop } from '../../workshop/entities/workshop.entity';
import { Person } from '../../person/entities/person.entity';
import { Service } from '../../service/entities/service.entity';
import { ServiceRequestJob } from '../../service-request-job/entities/service-request-job.entity';
import { ServiceRequestsStatus } from '@prisma/client';

@ObjectType()
export class ServiceRequest {
  @Field(() => BigInt)
  serviceRequestId: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => BigInt)
  vehicleId: bigint;

  @Field(() => BigInt)
  personId: bigint;

  @Field()
  requestedAt: Date;

  @Field(() => ServiceRequestsStatus ,{ nullable: true })
  status?: ServiceRequestsStatus;

  @Field({ nullable: true })
  description?: string;

  @Field(() => BigInt, { nullable: true })
  approvedServiceId?: bigint;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => [ServiceRequestJob])
  serviceRequestJobs: ServiceRequestJob[];

  @Field(() => Service, { nullable: true })
  approvedService?: Service;

  @Field(() => Vehicle)
  vehicle: Vehicle;

  @Field(() => Workshop)
  workshop: Workshop;

  @Field(() => Person)
  person: Person;
}

registerEnumType(ServiceRequestsStatus, { name: 'ServiceRequestsStatus' });
