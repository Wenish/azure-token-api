import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordModule } from './password/password.module';
import { ClientCredentialsModule } from './client-credentials/client-credentials.module';

@Module({
  imports: [PasswordModule, ClientCredentialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
