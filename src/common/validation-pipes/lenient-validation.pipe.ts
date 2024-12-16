import { Injectable, ValidationPipe } from '@nestjs/common';
import { ValidationError } from '../custom-errors/errors.config';

@Injectable()
export class LenientValidationPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      whitelist: false,
      forbidNonWhitelisted: false,
      exceptionFactory: (errors) => {
        const validationErrors = errors.map((error) => ({
          property: error.property,
          constraints: error.constraints
            ? Object.values(error.constraints)
            : [],
          children: error.children?.length > 0 ? error.children : [],
        }));
        return new ValidationError(validationErrors);
      },
    });
  }
}
