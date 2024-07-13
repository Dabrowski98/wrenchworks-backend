import { ObjectType, Field, Int } from '@nestjs/graphql';
// import { PermissionSet } from '../permission-set/entities/permission-set.entity';
// import { Workshop } from '../workshop/entities/workshop.entity';
// import { Person } from '../person/entities/person.entity';
// import { Service } from '../service/entities/service.entity';
// import { EmployeeTask } from '../employee-task/entities/employee-task.entity';

@ObjectType()
export class Employee {
  @Field(() => BigInt)
  employeeId: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => Date)
  joinedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => BigInt, { nullable: true })
  permissionSetId?: bigint;

    // @Field(() => PermissionSet, { nullable: true })
  // permissionSet?: PermissionSet;

  // @Field(() => Workshop)
  // workshop: Workshop;

  // @Field(() => Person)
  // person: Person;

  // @Field(() => [Service], { nullable: true })
  // services?: Service[];

  // @Field(() => [EmployeeTask], { nullable: true })
  // employeeTasks?: EmployeeTask[];
}


















