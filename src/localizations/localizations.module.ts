import { UsersModule } from './../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { LocalizationsService } from './localizations.service';
import { LocalizationSchema } from 'src/schemas/localization.schema';

@Module({
  imports: [UsersModule, MongooseModule.forFeature([{name: 'Localization', schema: LocalizationSchema}])],
  providers: [LocalizationsService],
  exports: [LocalizationsService]
})
export class LocalizationsModule {}
