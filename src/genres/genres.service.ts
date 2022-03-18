import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre, GenreDocument } from '../schemas/genre.schema';

@Injectable()
export class GenresService {
  constructor(
    @InjectModel(Genre.name) private genreModel: Model<GenreDocument>,
  ) {}

  async create(createGenresDto: CreateGenreDto): Promise<Genre> {
    return new this.genreModel(createGenresDto).save();
  }

  async findAll() {
    return this.genreModel.find();
  }

  async findOne(id: { id: string }) {
    return this.genreModel.findOne({ _id: id });
  }

  async update(id: { id: string }, updateGenreDto: UpdateGenreDto) {
    return this.genreModel.updateOne({ _id: id }, { ...updateGenreDto });
  }

  async remove(id: { id: string }) {
    return this.genreModel.deleteOne({ _id: id });
  }
}
