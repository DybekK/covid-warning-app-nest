import { Document } from 'mongoose';

export interface User extends Document, Array<any> {
    _id: string;
    username: string,
    firstname?: string,
    lastname?: string,
    password: string,
    age?: number,
    city: string;
    localization: {
        type: string;
        geometry?: Record<"cordinates", Array<number>>;
    }
};