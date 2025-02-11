import { PrismaClient, ReviewStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

const reviews = [
  // Reviews for Workshop 1 (Auto Serwis Kowalczyk)
  {
    userId: 7n, // usercustomer1 who had service in workshop 1
    workshopId: 1n,
    rating: new Decimal('4.5'),
    reviewText:
      'Great service, professional staff. Oil change and brake inspection were done quickly and efficiently.',
    status: ReviewStatus.ACCEPTED,
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000), // 25 days ago
  },
  // Reviews for Workshop 2 (Serwis Zieliński)
  {
    userId: 7n, // same usercustomer1 who also had service in workshop 2
    workshopId: 2n,
    rating: new Decimal('5.0'),
    reviewText:
      'Excellent performance tuning service. The engine runs much smoother now. Highly recommended!',
    status: ReviewStatus.ACCEPTED,
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000), // 12 days ago
  },
  {
    userId: 8n, // usercustomer2 who had service in workshop 2
    workshopId: 2n,
    rating: new Decimal('4.0'),
    reviewText:
      'Good diagnostic service, although a bit pricey. Staff is very knowledgeable.',
    status: ReviewStatus.PENDING,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  },
];

export async function seedReviews() {
  try {
    let count = 0;

    for (const review of reviews) {
      await prisma.review.create({
        data: {
          user: { connect: { userId: review.userId } },
          workshop: { connect: { workshopId: review.workshopId } },
          rating: review.rating,
          reviewText: review.reviewText,
          status: review.status,
          createdAt: review.createdAt,
        },
      });
      count++;
    }

    console.log('Successfully seeded reviews:', count);
  } catch (error) {
    console.error('Error seeding reviews:', error);
    throw error;
  }
}
