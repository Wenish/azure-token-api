import { Injectable } from '@nestjs/common';
import { ConfidentialClientApplication } from '@azure/msal-node'
import { ClientCredentialsDto } from './dto/clientCredentials.dto';

@Injectable()
export class ClientCredentialsService {
  getToken(clientCredentialsDto: ClientCredentialsDto) {
    const cca = new ConfidentialClientApplication({
      auth: {
        clientId: clientCredentialsDto.clientId,
        authority: clientCredentialsDto.authority,
        clientSecret: clientCredentialsDto.clientSecret
      }
    })

    const clientCredentialRequest = {
      scopes: [clientCredentialsDto.scopes],
    };

    const response = cca.acquireTokenByClientCredential(clientCredentialRequest)
    return response
  }
}
