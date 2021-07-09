import { ApiProperty } from "@nestjs/swagger";

export class ClientCredentialsDto {
    @ApiProperty()
    clientId: string;

    @ApiProperty()
    authority: string;

    @ApiProperty()
    clientSecret: string;

    @ApiProperty()
    scopes: string;

}
