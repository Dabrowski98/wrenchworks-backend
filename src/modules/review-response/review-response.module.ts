import { Module } from '@nestjs/common';
import { ReviewResponseService } from './review-response.service';
import { ReviewResponseResolver } from './review-response.resolver';

@Module({
  providers: [ReviewResponseResolver, ReviewResponseService],
})
export class ReviewResponseModule {}
