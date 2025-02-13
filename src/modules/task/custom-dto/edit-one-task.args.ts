import { ArgsType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { FindUniqueTaskArgs } from '../dto/find-unique-task.args';
import { EditOneTaskInput } from './edit-one-task.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { TaskWhereUniqueInput } from '../dto';
import { Prisma } from '@prisma/client';

@ArgsType()
export class EditOneTaskArgs {
  @Field(() => EditOneTaskInput, { nullable: false })
  @Type(() => EditOneTaskInput)
  @ValidateNested()
  data!: EditOneTaskInput;

  @Field(() => TaskWhereUniqueInput, { nullable: false })
  @Type(() => TaskWhereUniqueInput)
  where!: Prisma.AtLeast<TaskWhereUniqueInput, 'taskId'>;
}
