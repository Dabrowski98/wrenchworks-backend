import { Module } from '@nestjs/common';
import { PermissionSetService } from './permission-set.service';
import { PermissionSetResolver } from './permission-set.resolver';

@Module({
  providers: [PermissionSetResolver, PermissionSetService],
})
export class PermissionSetModule {}
