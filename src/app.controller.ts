import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
    
  @Get()
  HelloThere(@Res() res: Response): void {
    const redirectUrl = 'https://github.com/Dabrowski98/wrenchworks-backend';
    res.redirect(redirectUrl);
  }
}
