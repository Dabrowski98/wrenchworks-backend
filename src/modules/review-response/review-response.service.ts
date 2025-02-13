import { Injectable } from '@nestjs/common';
import {
  CreateOneReviewResponseArgs,
  UpdateOneReviewResponseArgs,
  DeleteOneReviewResponseArgs,
  FindUniqueReviewResponseArgs,
  FindManyReviewResponseArgs,
  ReviewResponse,
  ReviewResponseCount,
  DeleteManyReviewResponseArgs,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '../user/dto/user.model';
import { Review } from '../review/dto/review.model';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { ReviewResponseStatus } from '@prisma/client';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { ForbiddenError, subject } from '@casl/ability';
import { Action, AbilityFactory } from '../ability/ability.factory';
import { EditReviewResponseArgs } from './custom-dto/edit-review-response.args';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class ReviewResponseService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentUser: JwtUserPayload,
    args: CreateOneReviewResponseArgs,
  ): Promise<ReviewResponse> {
    const user = await this.prisma.user.findUnique({
      where: { userId: args.data.user.connect.userId },
    });
    if (!user) throw new RecordNotFoundError(User);
    const ability = await this.abilityFactory.defineAbility(currentUser);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('ReviewResponse', { userId: user.userId } as any),
    );
    return this.prisma.reviewResponse.create({
      data: {
        ...args.data,
        status: ReviewResponseStatus.PENDING,
      },
    });
  }

  async findOne(args: FindUniqueReviewResponseArgs): Promise<ReviewResponse> {
    const reviewResponse = await this.prisma.reviewResponse.findUnique(args);
    if (!reviewResponse) throw new RecordNotFoundError(ReviewResponse);
    return reviewResponse;
  }

  async findMany(args?: FindManyReviewResponseArgs): Promise<ReviewResponse[]> {
    return this.prisma.reviewResponse.findMany(args || {});
  }

  async update(args: UpdateOneReviewResponseArgs): Promise<ReviewResponse> {
    return this.prisma.reviewResponse.update({
      where: args.where,
      data: args.data,
    });
  }

  async edit(
    currentUser: JwtUserPayload,
    args: EditReviewResponseArgs,
  ): Promise<ReviewResponse> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const reviewResponse = await this.prisma.reviewResponse.findUnique({
      where: { reviewResponseId: args.where.reviewResponseId },
    });
    if (!reviewResponse) throw new RecordNotFoundError(ReviewResponse);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('ReviewResponse', reviewResponse),
    );

    const reviewResponseId = args.where.reviewResponseId;

    const reviewResponseBeforeEdit = await this.findOne({
      where: { reviewResponseId },
    });

    return this.prisma.reviewResponse.update({
      where: { reviewResponseId },
      data: {
        ...args.data,
        originalResponseText: reviewResponseBeforeEdit.responseText,
      },
    });
  }

  async delete(
    currentUser: JwtUserPayload,
    args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const reviewResponse = await this.prisma.reviewResponse.findUnique({
      where: args.where,
    });
    if (!reviewResponse) throw new RecordNotFoundError(ReviewResponse);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('ReviewResponse', reviewResponse),
    );

    return this.prisma.reviewResponse
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async accept(args: DeleteOneReviewResponseArgs): Promise<boolean> {
    const reviewResponse = await this.findOne(args);
    if (reviewResponse.status === ReviewResponseStatus.REJECTED) {
      throw new BadRequestError(
        'Review response is already rejected, cannot accept',
      );
    } else if (reviewResponse.status === ReviewResponseStatus.ACCEPTED) {
      throw new BadRequestError(
        'Review response is already accepted, cannot accept',
      );
    }

    return this.prisma.reviewResponse
      .update({
        where: args.where,
        data: { status: ReviewResponseStatus.ACCEPTED },
      })
      .then(() => true)
      .catch(() => false);
  }

  async reject(args: DeleteOneReviewResponseArgs): Promise<boolean> {
    const reviewResponse = await this.findOne(args);
    if (reviewResponse.status === ReviewResponseStatus.ACCEPTED) {
      throw new BadRequestError(
        'Review response is already accepted, cannot reject',
      );
    } else if (reviewResponse.status === ReviewResponseStatus.REJECTED) {
      throw new BadRequestError(
        'Review response is already rejected, cannot reject',
      );
    }

    return this.prisma.reviewResponse
      .update({
        where: args.where,
        data: { status: ReviewResponseStatus.REJECTED },
      })
      .then(() => true)
      .catch(() => false);
  }

  async hide(args: DeleteOneReviewResponseArgs): Promise<boolean> {
    const reviewResponse = await this.findOne(args);
    if (reviewResponse.status === ReviewResponseStatus.HIDDEN) {
      throw new BadRequestError(
        'Review response is already hidden, cannot hide',
      );
    }
    return this.prisma.reviewResponse
      .update({
        where: args.where,
        data: { status: ReviewResponseStatus.HIDDEN },
      })
      .then(() => true)
      .catch(() => false);
  }

  async deleteMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteManyReviewResponseArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const responses = await this.prisma.reviewResponse.findMany({
      where: { AND: [accessibleBy(ability).ReviewResponse, args.where] },
    });

    responses.forEach((reviewResponse) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('ReviewResponse', reviewResponse),
      );
    });

    return this.prisma.reviewResponse
      .deleteMany({
        where: { AND: [accessibleBy(ability).ReviewResponse, args.where] },
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async parentResponse(reviewResponseId: bigint): Promise<ReviewResponse> {
    return (
      await this.prisma.reviewResponse.findUnique({
        where: { reviewResponseId },
        include: { parentResponse: true },
      })
    ).parentResponse;
  }

  async childrenResponses(reviewResponseId: bigint): Promise<ReviewResponse[]> {
    return (
      await this.prisma.reviewResponse.findUnique({
        where: { reviewResponseId },
        include: { childrenResponses: true },
      })
    ).childrenResponses;
  }

  async review(reviewResponseId: bigint): Promise<Review | null> {
    return (
      await this.prisma.reviewResponse.findUnique({
        where: { reviewResponseId },
        include: { review: true },
      })
    ).review;
  }

  async user(reviewResponseId: bigint): Promise<User | null> {
    return (
      await this.prisma.reviewResponse.findUnique({
        where: { reviewResponseId },
        include: { user: true },
      })
    ).user;
  }

  async resolveCount(reviewResponseId: bigint): Promise<ReviewResponseCount> {
    const [childrenResponses] = await this.prisma.$transaction([
      this.prisma.reviewResponse.count({
        where: { parentResponseId: reviewResponseId },
      }),
    ]);

    return {
      childrenResponses,
    };
  }
}
