import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CleanupService {
  private readonly logger = new Logger(CleanupService.name);

  constructor(private readonly prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_HOUR)
  async removeExpiredSessionData() {
    this.logger.debug('Running scheduled cleanup of expired session data');

    const now = new Date();

    const deleted = await this.prisma.sessionData.deleteMany({
      where: {
        expiresAt: {
          lt: now,
        },
      },
    });

    this.logger.debug(`Deleted ${deleted.count} expired session data records`);
  }
}