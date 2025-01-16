import { Module } from '@nestjs/common';
import { ReviewResponseService } from './review-response.service';
import { ReviewResponseResolver } from './review-response.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [ReviewResponseResolver, ReviewResponseService],
  exports: [ReviewResponseService],
})
export class ReviewResponseModule {}
