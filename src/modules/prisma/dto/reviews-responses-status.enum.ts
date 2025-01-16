import { registerEnumType } from '@nestjs/graphql';

export enum ReviewsResponsesStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

registerEnumType(ReviewsResponsesStatus, {
  name: 'ReviewsResponsesStatus',
  description: undefined,
});
