import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingService } from './booking.service';
import { BookingResolver } from './booking.resolver';
import { Booking, BookingSchema } from './entities/booking.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
  ],
  providers: [BookingResolver, BookingService],
})
export class BookingModule {}
