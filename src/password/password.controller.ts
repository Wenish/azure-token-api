import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { PasswordDto } from './dto/password.dto';
import { PasswordService } from './password.service';

@Controller('password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post()
  post(@Body() passwordDto: PasswordDto) {
    return this.passwordService.getToken(passwordDto);
  }
}
