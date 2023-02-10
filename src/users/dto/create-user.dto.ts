import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

  @ApiProperty({example:'vitalik.semkin@mail.ru', description:'Email user'})
  @IsEmail({},{message:'Email not correct'})
  @IsString({message:'Must be string'})
  readonly email:string;

  @ApiProperty({example:'password', description:'Password user'})
  @IsString({message:'Must be string'})
  @Length(5,16, {message:'min length 5 and max 16'})
  readonly password: string
}