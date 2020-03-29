import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    firstname: Number,
    lastname: String,
    password: {
        type: String,
        required: true
    },
    age: Number,
    localization: {type: Schema.Types.ObjectId, ref: 'Localization'},
    createdAt: { type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now}
});