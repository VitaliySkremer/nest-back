import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto {
  @ApiProperty({example:'ADMIN', description:'role'})
  readonly value: string;

  @ApiProperty({example:'main admin', description:'description'})
  readonly description: string;
}