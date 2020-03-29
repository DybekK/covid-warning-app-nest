import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const LocalizationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    city: String,
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    geometry: {
        coordinates: {type: [Number], index: '2dsphere'}
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now}
});