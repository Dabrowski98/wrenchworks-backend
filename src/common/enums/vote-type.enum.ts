import { registerEnumType } from '@nestjs/graphql';

export enum VoteType {
  UPVOTE = 'UPVOTE',
  DOWNVOTE = 'DOWNVOTE',
  NEUTRAL = 'NEUTRAL',
}

registerEnumType(VoteType, {
  name: 'VoteType',
  description: 'Type of vote used to grade review and review responses',
});
