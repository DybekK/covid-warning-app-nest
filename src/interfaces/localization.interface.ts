import { Document } from 'mongoose';

export interface ILozalization extends Document {
    _id: string;
    city: string;
    type: string;
    geometry: any,
    user?: any,
    createdAt?: Date,
    updatedAt?: Date
}