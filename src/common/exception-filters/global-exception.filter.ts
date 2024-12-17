import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  HttpException,
  Logger,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { ValidationError } from '../custom-errors/errors.config';
import { ForbiddenError, PureAbility } from '@casl/ability';

@Catch()
export class GlobalExceptionFilter implements GqlExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: any, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const stackTrace = exception.stack || '';
    let gqlError: GraphQLError;

    if (exception instanceof HttpException) {
      gqlError = this.handleHttpException(exception);
      this.logger.error(
        `${gqlError.extensions.status} - ${gqlError.message} - ${stackTrace}`,
      );
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      gqlError = this.handlePrismaError(exception);
      this.logger.error(
        `${gqlError.extensions.status} - ${gqlError.extensions.code} - ${gqlError.message} - ${stackTrace} \n ${exception.message}`,
      );
    } else if (exception instanceof ValidationError) {
      gqlError = this.handleValidationError(exception);
      this.logger.error(
        `${gqlError.extensions.status} - ${gqlError.extensions.code} - ${gqlError.message} \n ${JSON.stringify(exception.errors, null, 2)} \n ${stackTrace} \n ${exception.message} \n ${gqlError.extensions.fields} \n ${gqlError.extensions.constraint}`,
      );
    } else if (exception instanceof ForbiddenError) { //CASL ERROR
      gqlError = this.handleForbiddenError(exception);
      this.logger.error(
        `${gqlError.extensions.status} - ${gqlError.extensions.code} - ${gqlError.message} \n ${stackTrace} \n ${exception.message} \n ${gqlError.extensions.fields} \n ${gqlError.extensions.constraint}`,
      );
    } else {
      gqlError = this.handleOtherError(exception);
      this.logger.error(
        `${gqlError.extensions.status} - ${gqlError.extensions.code} -  ${stackTrace}`,
      );
    }

    return gqlError;
  }

  private handleOtherError(exception: any): GraphQLError {
    return new GraphQLError(exception.message || 'Internal server error', {
      extensions: {
        code: exception.code || 500,
        status: exception.status || 'INTERNAL_SERVER_ERROR',
      },
    });
  }

  private handleHttpException(exception: HttpException): GraphQLError {
    return new GraphQLError(exception.message || 'Internal server error', {
      extensions: {
        code: this.getGraphQLErrorCode(exception),
        status: exception.getStatus(),
      },
    });
  }

  private handleValidationError(exception: ValidationError): GraphQLError {
    return new GraphQLError('Validation Failed', {
      extensions: {
        code: exception.code,
        status: exception.status,
        errors: exception.errors,
      },
    });
  }

  private handleForbiddenError(exception: ForbiddenError<PureAbility>): GraphQLError {
    return new GraphQLError(exception.message, {
      extensions: {
        code: 403,
        status: 'FORBIDDEN',
        constraint: exception.message,
      },
    });
  }

  private handlePrismaError(exception: Prisma.PrismaClientKnownRequestError) {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          return new GraphQLError('Unique constraint violation', {
            extensions: {
              code: 409,
              status: 'CONFLICT',
              constraint: exception.meta.cause,
              fields: exception.meta?.target || [],
            },
          });
        case 'P2025':
          return new GraphQLError('Record not found', {
            extensions: {
              code: 404,
              status: 'NOT_FOUND',
              constraint: exception.meta.cause,
              fields: exception.meta?.target || [],
            },
          });
        case 'P2003':
          return new GraphQLError('Foreign key constraint violation', {
            extensions: {
              code: 400,
              status: 'BAD_USER_INPUT',
              constraint: exception.meta.cause,
              fields: exception.meta?.target || [],
            },
          });
        default:
          return new GraphQLError('Database error', {
            extensions: {
              code: 500,
              status: 'INTERNAL_SERVER_ERROR',
            },
          });
      }
    }

    return new GraphQLError('Unknown database error', {
      extensions: {
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
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
