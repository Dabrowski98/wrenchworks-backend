import { PrismaClient, ReviewResponseStatus } from '@prisma/client';

const prisma = new PrismaClient();

const reviewResponses = [
  // Adjusted response to the first review
  {
    reviewId: 1n, // Ensure this matches an existing review ID
    userId: 9n, // User responding to the review
    responseText: 'Thank you for your feedback! We are glad you are satisfied.',
    originalResponseText: null,
    status: ReviewResponseStatus.ACCEPTED,
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // 20 days ago
  },
  // Adjusted response to the second review
  {
    reviewId: 2n, // Ensure this matches an existing review ID
    userId: 10n,
    responseText: 'We appreciate your kind words and recommendation!',
    originalResponseText: null,
    status: ReviewResponseStatus.ACCEPTED,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
  },
  // Response to the third review
  {
    reviewId: 3n,
    userId: 11n,
    responseText: 'Thank you for your feedback. We will work on our pricing.',
    originalResponseText: null,
    status: ReviewResponseStatus.PENDING,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  },
];

export async function seedReviewResponses() {
  try {
    let count = 0;

    for (const response of reviewResponses) {
      const existingResponse = await prisma.reviewResponse.findFirst({
        where: {
          reviewId: response.reviewId,
          userId: response.userId,
        },
      });

      if (existingResponse) continue;

      await prisma.reviewResponse.create({
        data: {
          review: { connect: { reviewId: response.reviewId } },
          user: { connect: { userId: response.userId } },
          responseText: response.responseText,
          originalResponseText: response.originalResponseText,
          status: response.status,
          createdAt: response.createdAt,
        },
      });
      count++;
    }

    console.log('Successfully seeded review responses:', count);
  } catch (error) {
    console.error('Error seeding review responses:', error);
    throw error;
  }
}
