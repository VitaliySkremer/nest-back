import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { User } from './users.model';
import {Roles} from "../auth/roles-auth.decorators";
import {RolesGuard} from "../auth/role.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import { ValidationPipes } from 'src/pipes/validation.pipes';

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @ApiOperation({summary:"Create user"})
  @ApiResponse({status:200, type:User})
  @UsePipes(ValidationPipes)
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

  @ApiOperation({summary:"Get user role"})
  @ApiResponse({status:200})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UsePipes(ValidationPipes)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto){
    return this.usersService.addRole(dto);
  }

  @ApiOperation({summary:"Ban user"})
  @ApiResponse({status:200})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto){
    return this.usersService.banUser(dto);
  }
}
