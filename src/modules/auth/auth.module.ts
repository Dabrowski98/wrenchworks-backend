import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { WorkshopAuthModule } from './workshop-auth/workshop-auth.module';

@Module({
  imports: [UserAuthModule, WorkshopAuthModule],
  exports: [UserAuthModule, WorkshopAuthModule],
})
export class AuthModule {}
