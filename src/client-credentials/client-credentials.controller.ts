import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientCredentialsService } from './client-credentials.service';
import { ClientCredentialsDto } from './dto/clientCredentials.dto';

@Controller('client-credentials')
export class ClientCredentialsController {
  constructor(private readonly clientCredentialsService: ClientCredentialsService) { }
  @Post()
  post(@Body() clientCredentialsDto: ClientCredentialsDto) {
    return this.clientCredentialsService.getToken(clientCredentialsDto);
  }
}
