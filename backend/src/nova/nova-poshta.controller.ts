import { Controller, Get, Param } from '@nestjs/common';
import { NovaPoshtaService } from './nova-poshta.service';

@Controller('nova-poshta')
export class NovaPoshtaController {
  constructor(private readonly novaPoshtaService: NovaPoshtaService) {}

  @Get('docs/:documentNumber/:phone')
  async getStatusDocuments(
    @Param('documentNumber') documentNumber: string,
    @Param('phone') phone: string,
  ) {
    return this.novaPoshtaService.getStatusDocuments(documentNumber, phone);
  }

  @Get('deps/CityName=:CityName/page=:page')
  async getDepartments(
    @Param('CityName') CityName: string,
    @Param('page') page: string,
  ) {
    return this.novaPoshtaService.getDepartments(CityName, page);
  }
}
