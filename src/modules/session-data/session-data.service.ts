import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SessionData } from './dto/session-data.model';
import { DeleteManySessionDataArgs, SessionDataCreateInput, SessionDataUpdateInput } from './dto';

@Injectable()
export class SessionDataService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    sessionDataCreateInput: SessionDataCreateInput,
  ): Promise<SessionData> {
    return this.prisma.sessionData.create({
      data: sessionDataCreateInput,
    });
  }

  async findAll(): Promise<SessionData[]> {
    return this.prisma.sessionData.findMany();
  }

  async findSessionById(
    id: string,
    options?: {
      includeUser?: boolean;
    },
  ): Promise<SessionData> {
    const session = await this.prisma.sessionData.findUnique({
      where: { sessionDataId: id },
      include: {
        user: options?.includeUser,
      },
    });
    if (!session) {
      throw new NotFoundException(`SessionData with ID ${id} not found`);
    }
    return session;
  }

  async update(
    id: string,
    sessionDataUpdateInput: SessionDataUpdateInput,
  ): Promise<SessionData> {
    return this.prisma.sessionData.update({
      where: { sessionDataId: id },
      data: sessionDataUpdateInput,
    });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.prisma.sessionData.delete({
      where: { sessionDataId: id },
    });
    return !!result;
  }

  async deleteMany(where: DeleteManySessionDataArgs): Promise<boolean> {
    const result = await this.prisma.sessionData.deleteMany(where);
    return !!result;
  }
}