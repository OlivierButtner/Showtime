import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event, EventDocument } from '../schemas/event.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private EventModel: Model<EventDocument>,
  ) {}
  async create(CreateEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.EventModel(CreateEventDto);
    return createdEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return this.EventModel.find().exec();
  }

  async findOne(id: string): Promise<Event> {
    return this.EventModel.findOne({ _id: id }).exec();
  }

  async update(id: string, UpdateEventDto: UpdateEventDto): Promise<Event> {
    return this.EventModel.findOneAndUpdate({ _id: id }, UpdateEventDto).exec();
  }

  remove(id: string) {
    this.EventModel.findOneAndDelete({ _id: id }).exec();
    return `This action removes a #${id} event`;
  }
}
