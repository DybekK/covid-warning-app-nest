import * as mongoose from 'mongoose';
import * as bcrypt from "bcrypt";
const SALT_WORK_FACTOR = 10;
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
    status: {
        type: String,
        enum: ['infected', 'contacted', 'safed', 'cured'],
        default: 'safed'
    },
    localization: {type: Schema.Types.ObjectId, ref: 'Localization'},
    createdAt: { type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now}
});

UserSchema.pre('save', function(next) {
    const user: any  = this;

    if(!user.isModified('password')) return next();

   bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);

            user.password = hash;
            next();
        })
   });
});

UserSchema.methods.comparePassword = function(candidatePassword: string, cb: any) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};