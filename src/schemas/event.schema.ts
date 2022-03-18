import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  artist_id: number;

  @Prop()
  name: string;

  @Prop()
  date: Date;

  @Prop()
  users: [number];

  @Prop()
  TotalSeats: number;
}

export const EventSchema = SchemaFactory.createForClass(Event);
