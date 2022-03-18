import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(email: string) {
    return this.userModel.findOne({ email });
  }

  update(email: number, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ email }, { $set: { ...updateUserDto } });
  }

  remove(email: string) {
    return this.userModel.deleteOne({ email });
  }
}
