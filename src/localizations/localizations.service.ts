import { IUser } from 'src/interfaces/user.interface';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ILozalization } from 'src/interfaces/localization.interface';
import { Model } from 'mongoose';

@Injectable()
export class LocalizationsService {
    constructor(
        @InjectModel('Localization')
        private readonly localizationModel: Model<ILozalization>,
        private readonly usersService: UsersService
    ){}

    async update(id: string, createLocalizationDto: ILozalization): Promise<ILozalization | undefined> {
        const user = await this.usersService.findById(id);
        let localization = await this.localizationModel.findById(user.localization._id);
        localization.city = createLocalizationDto.city;
        localization.geometry = createLocalizationDto.geometry;
        return localization.save();
    }

    async findOne(id: string): Promise<ILozalization | undefined> {
        const user = await this.usersService.findById(id);
        return user.localization;
    }

    async searchForDanger(): Promise<any> {
        
    }

    // async findOne(username: string): Promise<ILozalization | undefined> {
    //     const user = await this.usersService.findOne(username);
    //     return user.localization;
    // }
}
