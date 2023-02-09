import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example:'vitalik.semkin@mail.ru', description:'Email user'})
  readonly email: string

  @ApiProperty({example:'password', description:'Password user'})
  readonly password: string;
}