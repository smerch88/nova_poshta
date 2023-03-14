import { Module } from '@nestjs/common';
import { NovaModule } from './nova/nova-poshta.module';

@Module({
  imports: [NovaModule],
})
export class AppModule {}
