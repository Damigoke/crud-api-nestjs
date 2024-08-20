import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    
    @Post()
   async createUser(@Body() createUserDto: CreateUserDto) {
        
        return await this.userService.createUsers(createUserDto)
    }
    
    @Get('/get-all-users')
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @Get('/get-user')
    getUsersById(@Param('id') id: string) {
        return this.userService.getUserById(Number(id))
    }

    @Patch('/update-user')
    updatesUsers(@Param('id') id: string , @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(Number(id), updateUserDto)
    }

    @Delete('/delete-user')
    deleteUsers(@Param('id') id: string) {
        return this.userService.deleteUser(Number(id))
    }

    @Get()
    getMe() {
        return "User here";
    }
}
