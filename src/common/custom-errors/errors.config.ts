export class CustomError extends Error {
  name: string;
  status: string;
  code: number;
  errors: { property: string; constraints: string[] }[];
  constructor(message: string) {
    super(message);
  }
}

export class RecordNotFoundError extends CustomError {
  constructor(model: { name: string }) {
    super(`${model.name || 'Record'} not found.`);
    this.name = 'RecordNotFoundError';
    this.code = 404;
    this.status = 'NOT_FOUND';
  }
}

export class DeletedAtFieldNotFound extends CustomError {
  constructor(model: { name: string }) {
    super(`${model.name} does not implement soft-deletion model.`);
    this.name = 'DeletedAtFieldNotFound';
    this.code = 400;
    this.status = 'BAD_REQUEST';
  }
}

export class RecordNotSoftDeletedError extends CustomError {
  constructor(model: { name: string }
  ) {
    super(`${model.name} needs to be soft-deleted first in order to proceed action`);
    this.name = 'RecordNotSoftDeletedError';
    this.code = 400;
    this.status = 'BAD_REQUEST';
  }
}

export class NoDataProvidedForUpdate extends CustomError {
  constructor(model: { name: string }) {
    super(`No data provided for update of ${model.name}`);
    this.name = 'NoDataProvidedForUpdate';
    this.code = 400;
    this.status = 'BAD_REQUEST';
  }
}

export class ValidationError extends CustomError {
  constructor(errors: { property: string; constraints: string[] }[]) {
    super("Validation Error");
    this.name = 'ValidationError';
    this.code = 400;
    this.status = 'VALIDATION_ERROR';
    this.errors = errors;
  }
}

