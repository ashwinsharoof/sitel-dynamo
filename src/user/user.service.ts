import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as dynamoose from 'dynamoose';
import { Model } from 'dynamoose/dist/Model';
import { UserSchema } from './entities/user.schema';

@Injectable()
export class UserService {
  private dbInstance: Model<User>;
  constructor() {
    const tableName = 'users';
    this.dbInstance = dynamoose.model<User>(tableName, UserSchema);
  }
  async create(createUserDto: CreateUserDto) {
    return await this.dbInstance.create({
      Id: createUserDto.Id,
      name: createUserDto.name,
      email: createUserDto.email,
      dob: createUserDto.dob,
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return await this.dbInstance.get({ Id: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.dbInstance.delete({ Id: id });
  }
}
