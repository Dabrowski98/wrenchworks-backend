import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SessionData } from './dto/session-data.model';
import {
  DeleteManySessionDataArgs,
  DeleteOneSessionDataArgs,
  FindManySessionDataArgs,
  FindUniqueSessionDataArgs,
  SessionDataCreateInput,
  SessionDataUpdateInput,
  UpdateOneSessionDataArgs,
} from './dto';
import { User } from '../user/dto';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { accessibleBy } from '@casl/prisma';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { ForbiddenError } from '@casl/ability';
import { subject } from '@casl/ability';
import { RenameSessionDataArgs } from './custom-dto/rename-session-data.args';
@Injectable()
export class SessionDataService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    sessionDataCreateInput: SessionDataCreateInput,
  ): Promise<SessionData> {
    return this.prisma.sessionData.create({
      data: sessionDataCreateInput,
    });
  }

  async findMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args?: FindManySessionDataArgs,
  ): Promise<SessionData[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const sessionDatas = await this.prisma.sessionData.findMany({
      where: {
        AND: [accessibleBy(ability).SessionData, args?.where || {}],
      },
    });
    return sessionDatas;
  }

  async findOne(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: FindUniqueSessionDataArgs,
  ): Promise<SessionData> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const session = await this.prisma.sessionData.findFirst({
      where: { AND: [accessibleBy(ability).SessionData, args.where] },
    });
    if (!session) throw new RecordNotFoundError(SessionData);

    return session;
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneSessionDataArgs,
  ): Promise<SessionData> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const session = await this.prisma.sessionData.findUnique({
      where: args.where,
    });

    if (!session) throw new RecordNotFoundError(SessionData);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('SessionData', session),
    );

    return this.prisma.sessionData.update(args);
  }

  async delete(args: DeleteOneSessionDataArgs): Promise<boolean> {
    const session = await this.prisma.sessionData.findUnique(args);
    if (!session) throw new RecordNotFoundError(SessionData);

    return this.prisma.sessionData
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async deleteMany(userId: bigint): Promise<boolean> {
    const result = await this.prisma.sessionData.deleteMany({
      where: { userId },
    });
    return !!result;
  }

  async rename(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: RenameSessionDataArgs,
  ): Promise<SessionData> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const sessionData = await this.prisma.sessionData.findUnique({
      where: args.where,
    });

    if (!sessionData) throw new RecordNotFoundError(SessionData);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('SessionData', sessionData),
    );

    return this.prisma.sessionData.update(args);
  }

  // RESOLVE METHODS

  async user(sessionDataId: string): Promise<User> {
    return (
      await this.prisma.sessionData.findUnique({
        where: { sessionDataId: sessionDataId },
        include: {
          user: true,
        },
      })
    ).user;
  }
}
