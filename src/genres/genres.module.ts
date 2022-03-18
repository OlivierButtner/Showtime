import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';

import { Genre, GenreSchema } from '../schemas/genres.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
  ],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
