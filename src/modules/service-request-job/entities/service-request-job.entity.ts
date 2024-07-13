import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceRequest } from '../../service-request/entities/service-request.entity';
import { Job } from '../../job/entities/job.entity'

@ObjectType()
export class ServiceRequestJob {
  @Field(() => BigInt)
  serviceRequestId: bigint;

  @Field(() => BigInt)
  jobId: bigint;

  @Field()
  createdAt: Date;

  @Field(() => Job)
  job: Job;

  @Field(() => ServiceRequest)
  serviceRequest: ServiceRequest;
}
