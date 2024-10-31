import {
  ArgumentsHost,
  Catch,
  HttpException,
  Logger,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';

@Catch()
export class GlobalExceptionFilter implements GqlExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: any, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const stackTrace = exception.stack || '';
    let gqlError;

    if (exception instanceof HttpException) {
      gqlError = this.handleHttpException(exception);
      this.logger.error(
        `${gqlError.extensions.status} - ${gqlError.message} - ${stackTrace}`,
      );
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      gqlError = this.handlePrismaError(exception);
      this.logger.error(
        `${gqlError.extensions.status} - ${gqlError.extensions.code} - ${gqlError.message} - ${stackTrace}`,
      );
    } else {
      gqlError = this.handleOtherError(exception);
      this.logger.error(
        `${gqlError.extensions.status} - ${gqlError.extensions.code} -  ${stackTrace}`,
      );
    }

    return gqlError;
  }

  private handleOtherError(exception: any): any {
    return new GraphQLError( exception.message || 'Internal server error', {
      extensions: {
        code: exception.code || 'INTERNAL_SERVER_ERROR',
        status: exception.status || 500,
      },
    });
  }

  private handleHttpException(exception: HttpException) {
    return new GraphQLError(exception.message || 'Internal server error', {
      extensions: {
        code: this.getGraphQLErrorCode(exception),
        status: exception.getStatus(),
      },
    });
  }

  private handlePrismaError(exception: Prisma.PrismaClientKnownRequestError) {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          return new GraphQLError('Unique constraint violation', {
            extensions: {
              code: 'BAD_USER_INPUT',
              status: 409,
            },
          });
        case 'P2025':
          return new GraphQLError('Record not found', {
            extensions: {
              code: 'NOT_FOUND',
              status: 404,
            },
          });
        case 'P2003':
          return new GraphQLError('Foreign key constraint violation', {
            extensions: {
              code: 'BAD_USER_INPUT',
              status: 400,
            },
          });
        default:
          return new GraphQLError('Database error', {
            extensions: {
              code: 'INTERNAL_SERVER_ERROR',
              status: 500,
            },
          });
      }
    }

    return new GraphQLError('Unknown database error', {
      extensions: {
        code: 'INTERNAL_SERVER_ERROR',
        status: 500,
      },
    });
  }

  private getGraphQLErrorCode(exception: HttpException): string {
    const status = exception.getStatus();
    switch (status) {
      case 400:
        return 'BAD_REQUEST';
      case 401:
        return 'UNAUTHORIZED';
      case 403:
        return 'FORBIDDEN';
      case 404:
        return 'NOT_FOUND';
      case 409:
        return 'CONFLICT';
      case 500:
      default:
        return 'INTERNAL_SERVER_ERROR';
    }
  }
}
