import { ILozalization } from '../interfaces/localization.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/interfaces/user.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
    @InjectModel('Localization')
    private readonly localizationModel: Model<ILozalization>
    ) {}

  async create(createUserDto: IUser): Promise<IUser | undefined> {
    const user = new this.userModel({...createUserDto, _id: new mongoose.Types.ObjectId()});
    const localization = new this.localizationModel({...createUserDto.localization, _id: new mongoose.Types.ObjectId()})
    user.localization = localization;
    localization.save();
    return user.save();
  }

  async findOneToHash(username: string, password: string): Promise<IUser | undefined> {
    return this.userModel.findOne({username: username}, (err, user) => {
      if(err) throw err;

      user.comparePassword(password, (err, isMatch) => {
        if (err) throw err;
        return user
      });

    });
  }

  async findOne(username: string): Promise<IUser | undefined> {
    return this.userModel.findOne({username: username}).populate('localization');
  }

  async findAll(): Promise<IUser[] | undefined> {
    return this.userModel.findOne().exec();
  }
}