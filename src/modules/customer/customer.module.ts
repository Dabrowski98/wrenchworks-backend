import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [CustomerResolver, CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {} 