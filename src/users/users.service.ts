import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/schema/User.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
  ) {}

 
  async createUsers(req: CreateUserDto) {
    const newUser = {
      firstName: req.firstName,
      lastName: req.lastName,
      email: req.email,
      password: req.password,
    };

    const user = await this.userModel.create(newUser);
    return { user, message: 'User created successfully' };
  }


  async getAllUsers() {
    const allUsers = await this.userModel.findAll();
    return { allUsers, message: 'Users retrieved successfully' };
  }

 
  async getUserById(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { user, message: 'User retrieved successfully' };
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.userModel.update(updateUserDto, {
      where: { id },
    });
    return { user, message: 'User updated successfully' };
  }

  async deleteUser(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await user.destroy();
    return { message: 'User deleted successfully' };
  }
}
