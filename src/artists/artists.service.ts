import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist, ArtistDocument } from '../schemas/artist.schema';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist.name) private ArtistModel: Model<ArtistDocument>,
  ) {}
  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.ArtistModel(createArtistDto);
    return createdArtist.save();
  }
  async findAll(): Promise<Artist[]> {
    return this.ArtistModel.find().exec();
  }

  async findOne(id: string): Promise<Artist> {
    return this.ArtistModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    return this.ArtistModel.findOneAndUpdate(
      { _id: id },
      updateArtistDto,
    ).exec();
  }

  remove(id: string) {
    this.ArtistModel.findOneAndDelete({ _id: id }).exec();
    return `This action removes a #${id} artist`;
  }
}
