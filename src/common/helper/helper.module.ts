import { Global, Module } from '@nestjs/common';
import { HelperService } from 'src/common/helper/helper.service';

@Global()
@Module({
  providers: [HelperService],
  exports: [HelperService],
})
export class HelperModule {}
