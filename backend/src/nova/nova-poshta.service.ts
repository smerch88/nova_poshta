import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NovaPoshtaService {
  private readonly apiUrl = 'https://api.novaposhta.ua/v2.0/json/';

  async getStatusDocuments(documentNumber: string, phone: string) {
    const requestData = {
      apiKey: '8d677609f6e47ce83929374b3afab572',
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: documentNumber,
            Phone: phone,
          },
        ],
      },
    };

    const response = await axios.post(this.apiUrl, requestData);

    return response.data;
  }

  async getDepartments(CityName: string, Page: string) {
    const requestData = {
      apiKey: '8d677609f6e47ce83929374b3afab572',
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: CityName,
        Page: Page,
        Limit: '50',
        Language: 'UA',
      },
    };

    const response = await axios.post(this.apiUrl, requestData);

    return response.data;
  }
}
