import { Module } from '@nestjs/common';
import { NovaPoshtaService } from './nova-poshta.service';
import { NovaPoshtaController } from './nova-poshta.controller';

@Module({
  controllers: [NovaPoshtaController],
  providers: [NovaPoshtaService],
})
export class NovaModule {}
