import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import * as mongoose from 'mongoose';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>
    ) {}

  async create(createUserDto: User): Promise<User | undefined> {
    const user = new this.userModel({...createUserDto, _id: new mongoose.Types.ObjectId()});
    return user.save();
  }

  async findOne(username: string, password: string): Promise<User | undefined> {
    return this.userModel.findOne({username: username}, (err, user) => {
      if(err) throw err;

      user.comparePassword(password, (err, isMatch) => {
        if (err) throw err;
        return user
      });

    });
  }

  async findAll(): Promise<User[] | undefined> {
    return this.userModel.findOne().exec();
  }
}