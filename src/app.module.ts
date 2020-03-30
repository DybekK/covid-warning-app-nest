import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LocalizationsModule } from './localizations/localizations.module';

@Module({
  imports: [AuthModule, UsersModule, LocalizationsModule, MongooseModule.forRoot('mongodb://localhost:27017/covid')],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
