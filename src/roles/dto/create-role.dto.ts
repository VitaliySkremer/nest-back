import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({example:'ADMIN', description:'role'})
  readonly value: string;

  @ApiProperty({example:'main admin', description:'description'})
  readonly description: string;
}