import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsResolver } from './emails.resolver';

@Module({
  providers: [EmailsResolver, EmailsService]
})
export class EmailsModule {}
