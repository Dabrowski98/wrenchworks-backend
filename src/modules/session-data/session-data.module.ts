import { Module } from '@nestjs/common'; 
import { PrismaService } from 'src/database/prisma.service';
import { SessionDataResolver } from './session-data.resolver';
import { SessionDataService } from './session-data.service';

@Module({
  providers: [SessionDataResolver, SessionDataService, PrismaService],
  exports: [SessionDataService],
})
export class SessionDataModule {} 