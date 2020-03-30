import { ILozalization } from '../interfaces/localization.interface';
import { Document } from 'mongoose';

export interface IUser extends Document, Array<any> {
    _id: string;
    username: string;
    firstname?: string;
    lastname?: string;
    password: string;
    age?: number;
    city: string;
    localization: ILozalization
    comparePassword(candidatePassword: string, cb: any): any;
};