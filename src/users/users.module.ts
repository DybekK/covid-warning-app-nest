import { LocalizationSchema } from './../schemas/localization.schema';
import { UserSchema } from './../schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}, {name: 'Localization', schema: LocalizationSchema}])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
