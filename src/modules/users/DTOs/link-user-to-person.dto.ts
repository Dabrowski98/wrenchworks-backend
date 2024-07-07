import { IsNotEmpty, IsNumber } from 'class-validator';

export class LinkUserToPersonDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  personId: number;
}