import { ApiProperty } from "@nestjs/swagger";

export class PasswordDto {
    @ApiProperty()
    email: string;
  
    @ApiProperty()
    password: string;

    @ApiProperty()
    clientId: string;
  
    @ApiProperty()
    authority: string;
  
    @ApiProperty()
    scopes: string;
}
