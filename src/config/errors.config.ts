export class CustomError extends Error {
  name: string
  status: string;
  code: number;
  constructor(message: string) {
    super(message)
  }
}

export class EntityNotFoundError extends CustomError {
  constructor(message: string = `Entity was not found`) {
    super(message);
    this.name = 'EntityNotFoundError';
    this.code = 404
    this.status = 'NOT_FOUND'
  }
}