import { Injectable } from '@nestjs/common';
import { PublicClientApplication } from '@azure/msal-node'
import { PasswordDto } from './dto/password.dto';

@Injectable()
export class PasswordService {
    getToken(passwordDto: PasswordDto) {
        const pca = new PublicClientApplication({
            auth: {
                clientId: passwordDto.clientId,
                authority: passwordDto.authority
            }
        });

        const usernamePasswordRequest = {
            scopes: [passwordDto.scopes],
            username: passwordDto.email,
            password: passwordDto.password,
        };

        const response = pca.acquireTokenByUsernamePassword(usernamePasswordRequest)

        return response
    }
}
