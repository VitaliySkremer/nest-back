import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { User } from './users.model';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorators";
import {RolesGuard} from "../auth/role.guard";

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @ApiOperation({summary:"Create user"})
  @ApiResponse({status:200, type:User})
  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({summary:"Get All users"})
  @ApiResponse({status:200, type: [User]})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll(){
    return this.usersService.getAllUsers();
  }
}
