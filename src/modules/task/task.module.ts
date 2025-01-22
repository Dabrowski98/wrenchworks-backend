import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [TaskResolver, TaskService],
  exports: [TaskService],
})
export class TaskModule {}
