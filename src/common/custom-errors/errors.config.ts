export class CustomError extends Error {
  name: string;
  status: string;
  code: number;
  constructor(message: string) {
    super(message);
  }
}

export class RecordNotFoundError extends CustomError {
  constructor(message: string = `Record not found`) {
    super(message);
    this.name = 'RecordNotFoundError';
    this.code = 404;
    this.status = 'NOT_FOUND';
  }
}

export class DeletedAtFieldNotFoundError extends CustomError {
  constructor(
    message: string = `Model does not implement soft deletion concept`,
  ) {
    super(message);
    this.name = 'DeletedAtFieldNotFound';
    this.code = 400;
    this.status = 'BAD_REQUEST';
  }
}

export class RecordNotSoftDeletedError extends CustomError {
  constructor(
    message: string = `Record needs to be soft-deleted first in order to proceed action`,
  ) {
    super(message);
    this.name = 'RecordNotSoftDeletedError';
    this.code = 400;
    this.status = 'BAD_REQUEST';
  }
}
