import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ArtistsModule } from './artists/artists.module';
import { GenresModule } from './genres/genres.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ArtistsModule,
    GenresModule,
    EventsModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@showtime.evrgy.mongodb.net/showTime?retryWrites=true&w=majority',
    ),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
